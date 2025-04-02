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