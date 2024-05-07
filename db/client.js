// import pg from 'pg'
// const { Client } = pg
 
// const client = new Client({
// host: 'localhost',
//   port: 3333,
//   user: 'postgres',
//   password: 'pass',
//   database: 'employee_management_db'
// })

// See which option is better for this assignment, above includes PORT

const { Pool } = require('pg')
const client = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'pass',
    database: 'employee_management_db'
})

module.exports = client