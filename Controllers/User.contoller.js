
const User = require('../models/User.model')

// app.post('/api/products',
    
  const create =  async (req,res)=>{
 try {
    const product = await User.create(req.body)

    res.status(201).json({
        msg:"User created successfully",
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
        const Users = await User.find({})


        res.status(200).json({
            msg:"Users fetched successfully",
            Users
        })
    } catch (error) {
        res.status(500).json({
            err:error.message
        })
    }
   }




module.exports = {create,view}