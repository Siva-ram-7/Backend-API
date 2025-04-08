
const Cart = require('../models/Cart.model')

// app.post('/api/products',
    
  const create =  async (req,res,error)=>{
 try {
    const product = await Cart.create(req.body)

    res.status(201).json({
        msg:"Cart created successfully",
        product
    })


    
 } catch (error) {

 next(error)
 }
}


// app.get('/api/view' ,
    
    
    
   const view =  async (req,res, next)=>{
    try {
        const products = await Cart.find({}).populate('user' ,"name email").populate('product' ,"name image quantity price")


        if (products.length > 0) {
            const err = new Error("Cart not found")
            err.statusCode = 400
            err.status = "not found"
            next(err)
        }

        res.status(200).json({
            msg:"cart fetched successfully",
            products
        })
    } catch (error) {
       next(error)
    }
   }




module.exports = {create,view}