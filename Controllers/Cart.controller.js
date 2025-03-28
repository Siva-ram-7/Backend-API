
const Cart = require('../models/Cart.model')

// app.post('/api/products',
    
  const create =  async (req,res)=>{
 try {
    const product = await Cart.create(req.body)

    res.status(201).json({
        msg:"Cart created successfully",
        product
    })
 } catch (error) {
    res.status(500).json({
        msg:"Failed to create",
        message: error.message
    })
 }
}


// app.get('/api/view' ,
    
    
    
   const view =  async (req,res)=>{
    try {
        const products = await Cart.find({}).populate('user' ,"name email").populate('product' ,"name image quantity price")


        res.status(200).json({
            msg:"cart fetched successfully",
            products
        })
    } catch (error) {
        res.status(500).json({
            err:error.message
        })
    }
   }




module.exports = {create,view}