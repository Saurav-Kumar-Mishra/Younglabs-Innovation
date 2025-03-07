const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const errorMsg = {
    // error object
    error: 'Name is required.',
}
app.get('/', (request, response) => {
    response.status(200).send('Api is active')
})

app.get('/api/greet', (request, response) => {
    const name = request.query.name

    if (!name || name.trim() === '') {
        response.status(400).json(errorMsg) // Bad request when 'name' is missing
    } else {
        response
            .status(200)
            .json({ message: `Hello, ${name}! Welcome to Younglabs.` }) // Success response
    }
})

app.listen(process.env.PORT || 3002, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})
