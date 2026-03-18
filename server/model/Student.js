const mongoose = require("mongoose")

module.exports = mongoose.model("student", new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    name: { type: String, default: false }
}, { timestamps: true }))