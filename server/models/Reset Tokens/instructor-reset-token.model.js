const mongoose = require('mongoose');

const resettokenSchema = new mongoose.Schema({
_instructorId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Instructor' },
resettoken: { type: String, required: true },
createdAt: { type: Date, required: true, default: Date.now, expires: 43200 },
});

module.exports = mongoose.model('instructorpasswordResetToken', resettokenSchema);
