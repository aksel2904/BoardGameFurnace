const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    gameId: { type: String, required: true, unique: true },
    players: [{ type: String }],
    board: { type: Object, default: {} },
    winner: { type: String, default: null },
    rematchVotes: { type: Number, default: 0 }

});

module.exports = mongoose.model('Room', roomSchema);

/*
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    gameId: { type: String, required: true, unique: true },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
    board: { type: Map, of: mongoose.Schema.Types.Mixed, default: {} },
    winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', default: null },
    rematchVotes: { type: Number, default: 0 },
    currentPhase: { type: String, enum: ['auction', 'production', 'compensation'], default: 'auction' },
    cardsInPlay: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    auctionState: { type: mongoose.Schema.Types.Mixed, default: {} }
});

module.exports = mongoose.model('Room', roomSchema);

*/