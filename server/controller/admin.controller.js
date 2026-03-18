const Admin = require("../model/Admin.js");
const bcrypt = require('bcryptjs')

exports.adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await Admin.findOne({ email })
        if (!result) {
            return res.status(400).json({ messgae: 'wrong email' })
        }
        const compare = await bcrypt.compare(password, result.password)

        if (!compare) {
            return res.status(400).json({ message: 'wrong password' })
        }

        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}