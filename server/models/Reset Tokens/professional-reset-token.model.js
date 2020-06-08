const mongoose = require('mongoose');

const resettokenSchema = new mongoose.Schema({
_studentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Profesional' },
resettoken: { type: String, required: true },
createdAt: { type: Date, required: true, default: Date.now, expires: 43200 },
});

module.exports = mongoose.model('professionalpasswordResetToken', resettokenSchema);
