const pgp = require ('pg-promise')()
const connectionString = 'postgres://localhost:5432/postgres'
const db = pgp(connectionString)

db.oneOrNone('SELECT id FROM user WHERE username = $1', [username])
.then((user) => {
    if(user) {
        res.render('register', {message: 'Username is already taken'})
    }
    else{
        db.one('INSERT INTO users(username,password) VALUES($1,$2)', [username,password])
        .then(() => {
            res.send('SUCCESS') //this send will change from SUCCESS to something else
        })
    }
})

//Username is already taken should be on the front end
//res.status - 422 error
//chain on send function to that. And in that send you send back the error
//make a table to save to global state - shopping list
//wishlist/favorites table - store unique ID of the item (like a UPC)
//use sequelize or pg promise
//figure out how the API works - you can make a call from react or node
//insert a new favorite to the table - primary key, unique id, user.id (foreign key to user table)
//delete route to delete the favorite
//delete and insertion are 2 different post routes
//posts request will send a new favorite
//use bodyparser to make new insertion into the table.
//review how carts work
//order history (optional) - just pull old receipts
//table for orders - order id, user id, 
//purchase table, userid, order id, 

