 
 const express = require('express')
 const app = express()
 const dotenv = require('dotenv')
 dotenv.config()
 const cors = require('cors')
 const userRoutes = require('./routes/user.route')
 const connectToDb = require('./db/db')
 connectToDb()
 
 app.use(cors())
 app.use(express.json())

 app.get('/', (req, res) => {
    res.send('Hello, world')
 })

 app.use('/users', userRoutes)

 module.exports = app