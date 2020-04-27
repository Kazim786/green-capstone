const delrouter = require("express").Router()

const models = require('../models')

delrouter.get("/del-items",(req, res) => {
    models.shoppingLists.destroy('ItemName').then((data) => {
        res.json(data)
    }
    )
}
)
//deletes the item from the list once it has been bought by the user
//does the way i wrote it delete the entire column? I dont want that to happen
module.exports = delrouter 