const express = require('express')

const app = express()

const cors = require('cors')

const morgan = require('morgan')

const trainRouter = require('./Routes/trainRoutes')

app.use(express.json())

app.use(morgan('dev'))

app.use(cors({
    origin: '*'
}))

app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString()
    next()
})

app.use('/api/v1/train',trainRouter)

module.exports = app