const express = require('express')
const mangoose = require('mongoose')
const app = express()
const port = 4000
// const Model = require('./models')
const Product = require('./models/product.model')


const productRouter = require("./routes/products")
const userRouter = require("./routes/user")
const cartRouter = require("./routes/cart")
app.use(express.json())
app.use("/product" ,productRouter)
app.use("/user" ,userRouter)
app.use("/cart" ,cartRouter)
app.get('/',(req,res)=>{
    res.send('Hello World!')
})


app.use('*',function (req,res,next) {


    const  err = new Error(`Can't find ${req.originalUrl} on the server`)
     err.status = 'fail'
    err.statusCode = 404

    next(err)
})


// app.use((error,req,res,next) =>{
//     error.statusCode = error.statusCode || 500;
//     error.status = error.status || 'error'
//     res.status(error.statusCode).json({
//         status :error.statusCode,
//         message:error.message
//     })
// })

app.use((error,req,res)=>{
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';



    res.status(error.statusCode).json({
        status : error.status,
        message:error.message,
        test: "err from global error handler"
    })
})

mangoose.connect('mongodb+srv://nsramv:rHFxFa6uwRQrSiTK@sivaram.m1aln.mongodb.net/?retryWrites=true&w=majority&appName=sivaram')
.then(()=>{
    console.log("db connected successfully");
    
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })
    
})

.catch(()=>{
    console.log("failed to connect db")
    
})