const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/keeper_app_routes')

require('dotenv').config()

const app = express()
const PORT = 3000

// built-in function to parse a request data with JSON payload
app.use(express.json())
app.use(cors())

// connect to mongodb
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err))

// use the defined app routes
app.use(routes)

// run the server
app.listen(PORT, () => console.log(`Listening on: ${PORT}`))
