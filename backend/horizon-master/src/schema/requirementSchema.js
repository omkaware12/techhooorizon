const mongoose = require('mongoose');

const RequirementSchema = new mongoose.Schema({
    instituteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unit: {
        type: String, // e.g., kg, liters, units
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'fulfilled', 'closed'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Requirement', RequirementSchema);
