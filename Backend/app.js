 
 const express = require('express')
 const app = express()
 const cookieParser = require('cookie-parser')
 const dotenv = require('dotenv')
 dotenv.config()
 const cors = require('cors')
 const userRoutes = require('./routes/user.route')
 const captainRoute = require('./routes/captain.route')
 const connectToDb = require('./db/db')
 connectToDb()
 
 app.use(cors())
 app.use(express.json())
 app.use(cookieParser())
 app.use(express.urlencoded({extended: true}))

 app.get('/', (req, res) => {
    res.send('Hello, world')
 })

 app.use('/users', userRoutes)
 app.use('/captain', captainRoute)

 module.exports = app