const express = require('express')
const app = express()
const PORT = 3333

const {Client} = require('pg')
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'pass',
    database: 'employee_management_db'
})



// Connect to the database
client.connect()
    .then(() => {
        //Start express server
        app.listen(PORT, () => console.log('Server started on port', PORT))
    })

// Start express server
// app.listen(PORT, async () => {
//     console.log('Server started on port', PORT)
// })