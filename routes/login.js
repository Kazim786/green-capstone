//checking password
const models = require('../models')
const bcrypt = require('bcrypt')
const saltRounds = 10;
 var bodyParser = require('body-parser') //put this in the app.js like azam did - update, brought it back to login like i did before
//value not being used? Shouldnt it be getting used because of what we did with urlencoded in app.js?
app.use(bodyParser.urlencoded({extended: true})) //i brought this here - ephriam had it in app.js
const loginrouter = require("express").Router()

const models = require('../models')

router.get("/login",(req, res) => {
    models.User.findAll().then((data) => {
        res.json(data)
    })

    //GET THIS CODE BELOW THAT IS COMMENTED CHECKED
    // router.get('/signup', (req, res) => {
    //     res.render('signup') //idk if this was necessary. Should this be put after router.post for signup?
    // }
    // )

    router.post("/signup",async (req, res) => {
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

        let persistedUser = await models.User.findOne({
            where: {
                username: username
                
            }
        })
        if(persistedUser == null) {

            bcrypt.hash(password, saltRounds, async(error, hash) => {
                if(error){
                    res.render('/register', {message: 'Error creating user!'})

                } else {
                    let user = models.User.build({
                        username: username,
                        password: hash
                    })
                    let takenUsername = await user.save()
            if(takenUsername != null){
                res.redirect('/login')
                
            } else{
                res.render('/register', {message: 'User already exists'})
            }
                }
            })

            // let user = models.User.build({
            //     username: username,
            //     password: password
            // })
            
            // let takenUsername = await user.save()
            // if(takenUsername != null){
            //     res.redirect('/login')
                
            // } else{
            //     res.render('/register', {message: 'User already exists'})
            // }
        } else {
            res.render('/register', {message: "Username is already in use"})
        }
        // below i will write the same logic as above but for EMAIL:
        let persistedEmail = await models.User.findOne({
            where: {
                email: email
                
            }
        })
        if(persistedEmail == null) {
            let user = models.User.build({
                email: email,
                username: username,
                password: password
                //should i remove username and pass?
            })
            
            let takenEmail = await user.save()
            if(takenEmail != null){
                res.redirect('/login')
                
            } else{
                res.render('/register', {message: 'Email already exists'})
            }
        } else {
            res.render('/register', {message: "Email is already in use"})
        }

})

router.get('/signup', (req, res) => {
        res.render('signup') //idk if this was necessary. Should this be put after router.post for signup?
    }
    )
module.exports = loginrouter 
//write logic for hashing THE PASSWORD for the sign up 
//sign up will be for valid email (email not in use already), and they cant use a username which is taken. HASH THE PASSWORD 
//- Save to database (this will be another model function/method on the user model. Something along the lines of create) DONE
//checking password logic (you can use passport) --> for login