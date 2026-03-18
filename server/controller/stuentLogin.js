const Student = require("../model/Student.js");
const bcrypt = require('bcryptjs')
const dcrypt = require('dcryptjs')
const jwt = require('jsonwebtoken');
const { trace } = require("../routes/STUDENT.routes.js");

exports.studentLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await Student.findOne({ email })
        if (!result) {
            return res.status(400).json({ message: 'email not found' })
        }

        const data = await bcrypt.compare(password, result.password)
        if (!data) {
            return res.status(400).json({ message: 'password is incoorect' })
        }
        const token = jwt.sign({ _id: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
        res.cookie("STUDENT", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24
        })
        res.status(200).json({
            message: 'success',
            result: [{
                name: result.name,
                email: result.email,
            }]
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.REGISTER_student_tpo = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const result = await Student.findOne({ email })
        if (result) {
            return res.status(400).json({ message: 'email already exists' })
        }

        const hashpassword = await bcrypt.hash(password, 10)

        await Student.create({ name, email, password: hashpassword })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.READ_tpo = async (req, res) => {
    try {
        const result = await Student.find().select("-password")

        res.status(200).json({
            message: 'u cannot change password',
            result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.updateTpo = async (req, res) => {
    try {
        const { uid } = req.params
        const { name, email, password } = req.body
        const hashpassword = await bcrypt.hash(password, 10)
        await Student.findByIdAndUpdate(uid, { name, email, password: hashpassword })
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}

exports.deleteTpo = async (req, res) => {
    try {
        const { uid } = req.params
        await Student.findByIdAndDelete(uid)
        res.status(200).json({ message: 'success' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'fail' })
    }
}