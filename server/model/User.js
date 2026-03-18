const mongoose = require('mongoose')

module.exports = mongoose.model('user', new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    address: { type: String, require: true },
}, { timestamps: true }))