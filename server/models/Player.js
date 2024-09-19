/*const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    score: { type: Number, default: 0 },
    rematchVote: { type: Boolean, default: false },

});

module.exports = mongoose.model('Player', playerSchema);*/


const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    productionLine: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    turnOrder: { type: Number, required: true },
    points: { type: Number, default: 0 }
});

module.exports = mongoose.model('Player', playerSchema);