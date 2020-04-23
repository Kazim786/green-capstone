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