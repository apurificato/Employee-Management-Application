// View all employees
app.get('/api/employees', async (request, response) => {
    const { rows } = await client.query('SELECT * FROM employees')

    // console.log(data)
    response.json(rows)
})

// Add a employee
app.post('/api/employees', async (request, response) => {
    const employeeData = request.body
    await client.query('INSERT INTO employees (id, first_name, last_name, role_id) VALUES ()', [employeeData.id, employeeData.first_name, employeeData.last_name, employeeData.role_id])

    response.json({
        message: 'New employee added successfully'
    })
})

// Update a department
// Needs further coding
app.put('/api/employees/:id', async (request, response) => {
    const employeeData = request.params.id.body
    await client.query('INSERT INTO employ (name, type) VALUES ($1, $2)', [departmentData.id, departmentData.name])

    response.json({
        message: 'New department added successfully'
    })
})