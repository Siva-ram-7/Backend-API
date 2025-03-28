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


mangoose.connect('mongodb+srv://sivram1702:XZ94gbKrb4RtsgON@backenddb.bkkzh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDB')
.then(()=>{
    console.log("db connected successfully");
    
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })
    
})

.catch(()=>{
    console.log("failed to connect db");
    
})