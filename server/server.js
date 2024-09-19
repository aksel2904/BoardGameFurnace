const express = require('express');
const cors = require('cors');
const app = express();


const server = require('http').createServer(app);

const {Server} = require('socket.io');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    }
});

require('dotenv').config();
const mongoose = require('mongoose');
console.log("MONGO_URL: ", process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL).then(async () => {
    console.log("Connected to MONGO");
    try {
        await mongoose.connection.db.dropDatabase();
        console.log("Database cleared successfully.");
    } catch (error) {
        console.error("Error during clearing Db", error);
    }
}).catch((err) => {
    console.error('Error during connecting to MONGO', err);
});

app.get('/', (req, res) => {
    res.send("Server started");
})

const port = 3001;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const Room = require('./models/Room');

io.on('connection', (socket) => {
    socket.on('create session', async () => {
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
        const newSession = new Room({ gameId, players: [socket.id] });
        await newSession.save();
        socket.join(gameId);
        socket.emit('session created', { gameId });
    });


    socket.on('join session', async (gameId) => {
        const game = await Room.findOne({ gameId });
        if (!game) {
            socket.emit('error', { message: 'Invalid Game ID' });
            return;
        }

        if (game.players.length >= 4) {
            socket.emit('error', { message: 'Room is full' });
            return;
        }

        game.players.push(socket.id);
        await game.save();
        socket.join(gameId);
        socket.emit('session joined', { gameId });

        // Проверка на 4 игроков
        if (game.players.length === 4) {
            io.to(gameId).emit('start game');
        }
    });
});
