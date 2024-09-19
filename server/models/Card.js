const mongoose = require('mongoose');

const effectSchema = new mongoose.Schema({
    type: { type: String, enum: ['production', 'exchange', 'compensation'], required: true },
    action: { type: String, required: true },
    details: { type: mongoose.Schema.Types.Mixed },
    maxUses: { type: Number, default: 1 }
});

const cardSideSchema = new mongoose.Schema({
    side: { type: String, enum: ['A', 'B'], required: true },
    productionEffects: [effectSchema],
    compensationEffects: [effectSchema],
    isUpgraded: { type: Boolean, default: false }
});

const cardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, default: 0 },
    imageUrl: { type: String, default: '' },
    sides: [cardSideSchema],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', default: null },
    isActive: { type: Boolean, default: false },
    isUsedInProduction: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Card', cardSchema);
