const mongoose = require('mongoose')

module.exports = mongoose.model("admin", new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true }
}, { timestamps: true }))