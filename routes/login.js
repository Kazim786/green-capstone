//checking password
var bodyParser = require('body-parser')
const loginrouter = require("express").Router()

const models = require('../models')

router.get("/login",(req, res) => {
    models.User.findAll().then((data) => {
        res.json(data)
    })


    router.post("/signup",(req, res) => {
        models.User.create({
            name: req.body.name,
            email: req.body.email ,
            username: req.body.username,
            birthday: req.body.birthday,
            age: req.body.age,
            password: req.body.password
                //set up body parser to get form data
        }).then((data) => {
            res.json(data)
        })

})
module.exports = loginrouter 
//write logic for hashing THE PASSWORD for the sign up 
//sign up will be for valid email (email not in use already), and they cant use a username which is taken. HASH THE PASSWORD 
//- Save to database (this will be another model function/method on the user model. Something along the lines of create) DONE
//checking password logic (you can use passport) --> for login