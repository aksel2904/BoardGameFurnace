const mongoose = require('mongoose');

// Схема для эффекта карты
const effectSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['production', 'exchange'], // Ограничиваем тип эффекта двумя значениями
        required: true
    },
    details: {
        type: mongoose.Schema.Types.Mixed // тут хранятся эффекты 1) from = [] -> to = [] в cлучае exchange;
        // what = [] для  production
    },
    maxUses: {
        type: Number,
        default: 0 // Указываем максимальное количество использований, по умолчанию 0
    }
});

// Схема для карты
const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Имя карты обязательно
    },
    type: {
        type: String,
        enum: ['starting', 'enterprise'], // Ограничиваем тип карты
        required: true
    },
    compensation: effectSchema, // Схема для компенсации карты
    firstSide: effectSchema, // Схема для первой стороны карты
    secondSide: effectSchema // Схема для второй стороны карты
});


module.exports = mongoose.model('Card', cardSchema);
