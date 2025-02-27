const mongoose = require('mongoose');

const InstituteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Linked to User
    vision: { type: String },
    mission: { type: String },
    location: { type: String, required: true },
    lat: { type: Number }, // Google Maps API
    lng: { type: Number }, // Google Maps API
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Institute', InstituteSchema);


