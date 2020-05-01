const delrouter = require("express").Router()

const models = require('../models')

delrouter.get("/del-items/:id",(req, res) => {
    models.shoppingList.findOne({where: {id: req.params.id }}).then( async (data) => {
        res.json(await data.create())
    })
})