const pgp = require ('pg-promise')()
const connectionString = 'postgres://localhost:5432/postgres'
const db = pgp(connectionString)

console.log(db)