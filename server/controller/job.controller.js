const JobPost = require("../model/JobPost.js");

exports.JobPost = async (req, res) => {
    try {
        const { skills, experience, title, desc } = req.body
        await JobPost.create({ skills, experience, title, desc })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "fail" })
    }
}

exports.jobRead = async (req, res) => {
    try {
        const result = await JobPost.find()
        res.status(200).json({ message: 'success', result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'error' })
    }
}

exports.jobUpdate = async (req, res) => {
    try {
        const { jid } = req.params
        const { skills, experience, title, desc } = req.body
        await JobPost.findByIdAndUpdate(jid, { skills, experience, title, desc })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "fail" })
    }
}

exports.jobDelete = async (req, res) => {
    try {
        const { jid } = req.params
        await JobPost.findByIdAndDelete(jid)
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}