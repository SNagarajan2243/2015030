const app = require('./app.js')

const mongoose = require('mongoose')

const dotenv = require('dotenv')

dotenv.config({path: './config.dotenv'})

const DB = process.env.DATABASE_LINK

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB Connection Successfully")
}).catch((err)=>{
    console.log("DB Connection Failed")
    console.log(err)
})

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})

app.get('*',(req,res)=> {

    const url = req.originalUrl.split('/')

    const route = url[url.length-1]

    res.status(404).json({
        status: 'error',
        requestedAt: req.requestTime,
        message: `Can't find ${route} on this server`
    })

})