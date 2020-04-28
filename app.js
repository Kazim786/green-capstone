const pgp = require ('pg-promise')()
const connectionString = 'postgres://localhost:5432/postgres'
const db = pgp(connectionString)
const express = require('express')
const app = express()

const route = require('./routes/stores')
const delrouter = require('./routes/del-items')
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended: true}))
app.use(route)
app.use(delrouter)

// db.oneOrNone('SELECT id FROM user WHERE username = $1', [username])
// .then((user) => {
//     if(user) {
//         res.render('register', {message: 'Username is already taken'})
//     }
//     else{
//         db.one('INSERT INTO users(username,password) VALUES($1,$2)', [username,password])
//         .then(() => {
//             res.send('SUCCESS') //this send will change from SUCCESS to something else
//         })
//     }
// })

app.listen(3000, () => {
    console.log("listening")
})








//Username is already taken should be on the front end
//res.status - 422 error -IMPORTANT
//chain on send function to that. And in that send function you send back the error -IMPORTANT
//make a table to save to global state - shopping list
//wishlist/favorites table - store unique ID of the item (like a UPC) -NO
//use sequelize or pg promise
//figure out how the API works - you can make a call from react or node (foorkan)
//insert a new favorite to the table - primary key, unique id, user.id (foreign key to user table) -no
//delete route to delete the favorite -no
//delete and insertion are 2 different post routes -no
//posts request will send a new favorite -no

//deleting stuff from shop list once those things have been purchased -IMPORTANT
//use bodyparser to make new insertion into the table. -IMPORTANT



//review how carts work -NO
//order history (optional) - just pull old receipts-NO
//table for orders - order id, user id, -NO
//purchase table, userid, order id, -NO

