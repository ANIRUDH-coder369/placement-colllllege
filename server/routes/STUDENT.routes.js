const { studentLogin, REGISTER_student_tpo, READ_tpo, updateTpo, deleteTpo } = require('../controller/stuentLogin.js')

const router = require('express').Router()

router
    .post("/registerTpo", REGISTER_student_tpo)

    .post("/studentLogin", studentLogin)
    .get("/readTpo", READ_tpo)
    .put("/updateTpo/:uid", updateTpo)
    .delete("/deleteTpo/:uid", deleteTpo)

module.exports = router