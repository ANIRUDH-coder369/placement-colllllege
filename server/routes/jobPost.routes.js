const { JobPost, jobRead, jobUpdate, jobDelete } = require('../controller/job.controller.js')

const router = require('express').Router()

router
    .post("/jobPost", JobPost)
    .get("/jobRead", jobRead)
    .put("/jobUpdate/:jid", jobUpdate)
    .delete("/jobDelete/:jid", jobDelete)

module.exports = router