//checking password

const router = require("express").Router()

const models = require('../models')

router.get("/login",(req, res) => {
    models.User.findAll().then((data) => {
        res.json(data)
    }
    )
})
module.exports = router 