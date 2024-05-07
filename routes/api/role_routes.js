const router = require('express').Router();
const { Role } = require('../../models/');

// View all roles
app.get('/api/roles', async (request, response) => {
    const { rows } = await Role.query('SELECT * FROM roles')

    // console.log(data)
    response.json(rows)
})

// Add an employee role
// This might be one that's linked to employee id ? 
app.post('/api/roles', async (request, response) => {
    const roleData = request.body
    await client.query('INSERT INTO roles (id, title, salary, department_id) VALUES ()', [roleData.id, roleData.title, roleData.salary, roleData.department_id])

    response.json({
        message: 'New employee role added successfully'
    })
})