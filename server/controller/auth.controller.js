const User = require("../model/User.js");

exports.registerCompany = async (req, res) => {
    try {
        const { name, email, address } = req.body
        await User.create({ name, email, address })

        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.readCompany = async (req, res) => {
    try {
        const result = await User.find()
        res.status(200).json({ message: 'success', result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.deleteCompany = async (req, res) => {
    try {
        const { did } = req.params
        await User.findOneAndDelete(did)
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

