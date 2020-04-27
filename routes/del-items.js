const delrouter = require("express").Router()

const models = require('../models')

router.get("/del-items",(req, res) => {
    models.shoppingLists.destroy('ItemName').then((data) => {
        res.json(data)
    }
    )
}
)
//deletes the item from the list once it has been bought by the user
module.exports = delrouter 