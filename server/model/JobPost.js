
const mongoose = require('mongoose')

module.exports = mongoose.model("jobPost", new mongoose.Schema({
    title: { type: String, require: true },
    desc: { type: String, require: true },
    skills: { type: String, require: true },
    experience: { type: String, require: true },
}, { timestamps: true }))