const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    // ресурсы игрока
    "oil": { type: Number, default: 0 },
    "coin": { type: Number, default: 0 },
    "metal": { type: Number, default: 0 },
    "coal": { type: Number, default: 0 },
    "upgrade": { type: Number, default: 0 }
});

const playerSchema = new mongoose.Schema({
    socketId: { type: String, required: true },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }], // ссылки на карты в руке игрока
    upsideDown: [{ type: Boolean, default: false }], // какой стороной повернута карта
    resources: resourceSchema,
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' } // id комнаты в которой находится игрок
});

module.exports = mongoose.model('Player', playerSchema);

