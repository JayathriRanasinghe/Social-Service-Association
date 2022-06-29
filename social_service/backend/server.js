const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes_urls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected")) //here we can give the copied link here.
//but it is not that safe to do since it contain the user name and the password to the database

//following lines need to arrange in this order
app.use(express.json())
app.use(cors())
app.use('/app', routes_urls)
app.listen(4000, () => console.log("server is up and running"))

