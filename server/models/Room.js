const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    gameId: { type: String, required: true, unique: true },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }], // ссылки на игроков
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }], // ссылки на карты - этот массив будет чиститься
    phase: {
        type: String,
        enum: ['auction', 'production', 'trading', 'end'], // фаза игры
        required: true,
        default: 'auction'
    },
    round: { type: Number, default: 1 } // всего 4
});

module.exports = mongoose.model('Room', roomSchema);

