
const Product = require('../models/product.model')

// app.post('/api/products',
    
  const create =  async (req,res)=>{
 try {
    const product = await Product.create(req.body)

    res.status(201).json({
        msg:"Product created successfully",
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
        const products = await Product.find({})


        res.status(200).json({
            msg:"Products fetched successfully",
            products
        })
    } catch (error) {
        res.status(500).json({
            err:error.message
        })
    }
   }




module.exports = {create,view}