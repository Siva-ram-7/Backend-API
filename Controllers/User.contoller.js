
const User = require('../models/User.model')

// app.post('/api/products',
    
  const create =  async (req,res,next)=>{
 try {
    const product = await User.create(req.body)

    res.status(201).json({
        msg:"User created successfully",
        product
    })
 } catch (error) {
    next(error)
 }
}


// app.get('/api/view' ,
    
    
    
   const view =  async (req,res,next)=>{
    try {
        const Users = await User.find({})


        res.status(200).json({
            msg:"Users fetched successfully",
            Users
        })
    } catch (error) {
       next(err)
    }
   }
   const viewOne =  async (req,res,next)=>{
    try {
        const User01= await User.findById(req.params.id)


        if (!User01) {
            const err = new Error("User not found")
            err.statusCode = 400
            err.status = "not found"
           return next(err)
        }

        res.status(200).json({
            msg:"Users fetched successfully",
            User01
        })
    } catch (error) {
       next(err)
    }
   }




module.exports = {create,view, viewOne}