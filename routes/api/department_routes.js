


// Get all departments
app.get('/api/departments', async (request, response) => {
    const { rows } = await client.query('SELECT * FROM departments')

    // console.log(data)
    response.json(rows)
})

// Add a department
app.post('/api/departments', async (request, response) => {
    const departmentData = request.body
    await client.query('INSERT INTO depaertments (name, type) VALUES ($1, $2)', [departmentData.id, departmentData.name])

    response.json({
        message: 'New department added successfully'
    })
})