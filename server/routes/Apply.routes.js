const router = require("express").Router()
const { jobPost, jobRead, jobUpdate, jobDelete } = require("../controller/postjobStudent.controller.js")

router
    .post("/post", jobPost)
    .get("/read", jobRead)
    .put("/update/:jid", jobUpdate)
    .delete("/delete/:jid", jobDelete)

module.exports = router