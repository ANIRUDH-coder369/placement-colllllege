const { adminLogin } = require('../controller/admin.controller.js')

const router = require('express').Router()

router
    .post("/adminLogin", adminLogin)

module.exports = router