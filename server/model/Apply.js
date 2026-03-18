const mongoose = require('mongoose')

module.exports = mongoose.model("apply", new mongoose.Schema({
    name: { type: String, require: true },
    education: { type: String, require: true },
    experience: { type: String, require: true },
    done_project: { type: String, require: true },
    skills: { type: String, require: true },

}, { timestamps: true }))