const Apply = require("../model/Apply.js");

exports.jobPost = async (req, res) => {
    try {
        const { name, education, experience, done_project, skills } = req.body

        await Apply.create({ name, education, experience, done_project, skills })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.jobRead = async (req, res) => {
    try {
        const result = await Apply.find()
        res.status(200).json({ message: 'success', result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.jobUpdate = async (req, res) => {
    try {
        const { jid } = req.params
        const { name, education, experience, done_project, skills } = req.body

        await Apply.findByIdAndUpdate(jid, { name, education, experience, done_project, skills })
        res.status(200).json({ message: "success" })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.jobDelete = async (req, res) => {
    try {
        const { jid } = req.params
        await Apply.findByIdAndDelete(jid)
        res.status(200).json({ message: 'succes' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}