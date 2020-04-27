const router = require("express").Router()

const models = require('../models')

router.get("/stores",(req, res) => {
    models.User.findAll().then((data) => {
        res.json(data)
    }
    )
}
)
module.exports = router 
//start writing routes
//send back responses as json 
//follow this format
//models.user.create and return it as json data
//use postman to test it - lets you test API and make api requests
//the same way you make API requests make a request to the server
//make separate for shopping list so you can delete the items from the list
//delete command from sequelize