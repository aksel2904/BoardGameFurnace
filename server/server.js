const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
require('dotenv').config();
const mongoose = require('mongoose');

// Настройка CORS для разрешения запросов с фронтенда
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));

// Настройка Socket.io с CORS
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
});

// Подключение к MongoDB
console.log("MONGO_URL: ", process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL).then(async () => {
    console.log("Connected to MONGO");
    try {
        // Очищаем базу данных и заполняем коллекцию карт
        await mongoose.connection.db.dropDatabase();
        console.log("Database cleared successfully.");
        const { fillingCardsCollection } = require('./services/CardFillingService');
        fillingCardsCollection();
    } catch (error) {
        console.error("Error during clearing Db", error);
    }
}).catch((err) => {
    console.error('Error during connecting to MONGO', err);
});

// Простой маршрут для проверки работы сервера
app.get('/', (req, res) => {
    res.send("Server started");
});

const port = 3001;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const Room = require('./models/Room');
const Player = require('./models/Player');
const Card = require('./models/Card');
const { fillingCardsCollection } = require("./services/CardFillingService");

// Логика работы с сокетами
io.on('connection', (socket) => {
    // Создание новой игровой сессии
    socket.on('create session', async () => {
        // Функция для генерации уникального идентификатора игры
        const generateGameId = () => {
            const length = 6;
            let result = "";
            const lettersNumbers = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (let i = 0; i < length; i++) {
                result += lettersNumbers[Math.floor(Math.random() * lettersNumbers.length)];
            }
            return result;
        };

        const gameId = generateGameId();

        // Создание нового игрока
        const newPlayer = new Player({
            socketId: socket.id,
            resources: { oil: 0, coin: 0, metal: 0, coal: 0, upgrade: 0 },
            cards: [],
            upsideDown: [],
            roomId: null
        });
        await newPlayer.save();

        // Получаем все карты из базы данных
        const cards = await Card.find({}, '_id');

        // Создаем новую игровую сессию
        const newSession = new Room({
            gameId,
            players: [newPlayer._id],
            cards: cards.map(card => card._id),
            phase: 'auction',
            round: 1
        });
        await newSession.save();

        // Обновляем у игрока идентификатор комнаты
        newPlayer.roomId = newSession._id;
        await newPlayer.save();

        // Добавляем игрока в комнату Socket.io и отправляем ему ID сессии
        socket.join(gameId);
        socket.emit('session created', { gameId });
    });

    // Присоединение к существующей сессии
    socket.on('join session', async (gameId) => {
        const game = await Room.findOne({ gameId });
        if (!game) {
            socket.emit('error', { message: 'Invalid Game ID' });
            return;
        }

        // Проверка на максимальное количество игроков (4)
        if (game.players.length >= 4) {
            socket.emit('error', { message: 'Room is full' });
            return;
        }

        // Создание нового игрока
        const newPlayer = new Player({
            socketId: socket.id,
            resources: { oil: 0, coin: 0, metal: 0, coal: 0, upgrade: 0 },
            cards: [],
            upsideDown: [],
            roomId: game._id
        });
        await newPlayer.save();

        // Добавляем игрока в игру
        game.players.push(newPlayer._id);
        await game.save();

        socket.join(gameId);
        socket.emit('session joined', { gameId });

        // Начало игры, если игроков 4
        if (game.players.length === 4) {
            const startingCards = await Card.find({
                _id: { $in: game.cards },
                type: 'starting'
            });

            // Раздаем стартовые карты каждому игроку
            for (const playerId of game.players) {
                const randomIndex = Math.floor(Math.random() * startingCards.length);
                const selectedCard = startingCards[randomIndex];

                const player = await Player.findById(playerId);
                player.cards.push(selectedCard._id);
                player.upsideDown.push(true);

                // Добавляем ресурсы игрокам в зависимости от компенсации
                selectedCard.compensation.details.what.forEach(resource => {
                    player.resources[resource] += 1;
                });

                await player.save();

                // Убираем выбранную карту из списка доступных
                startingCards.splice(randomIndex, 1);
            }

            // Обновляем карты в игре
            const updatedCards = await Card.find({
                _id: { $in: game.cards },
                type: 'starting'
            });

            game.cards = game.cards.filter(cardId => {
                return !updatedCards.some(startingCard => startingCard._id.toString() === cardId.toString());
            });

            await game.save();
            // console.log(game.cards.length);

            // Уведомляем всех игроков о начале игры
            io.to(gameId).emit('start game');

            // Отправляем карты каждому игроку
            for (const playerId of game.players) {
                const player = await Player.findById(playerId);
                let playerCards = [];
                let upsideDownState = [];

                for (const cardId of player.cards) {
                    const card = await Card.findById(cardId);
                    playerCards.push(card);
                }

                upsideDownState = [...player.upsideDown];

                io.to(player.socketId).emit('update player cards', playerCards, upsideDownState);
            }
        }
    });
});
