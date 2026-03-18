require("dotenv").config({ path: "./../.env" })


const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')
const Admin = require("../model/Admin.js")

exports.adminSeeder = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connect');

        const hash = await bcrypt.hash("123", 10)
        await Admin.create({
            email: "admin@gmail.com",
            password: hash
        })
        console.log('admin seeder complete');
        process.exit(1)

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}