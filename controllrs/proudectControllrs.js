const asyncHalende =require("express-async-handler");
const product = require("../moudel/proudectModule");
const { connect } = require( "mongoose" );



const createProudect= asyncHalende(async(req ,res)=>{
    const {name,price,section,description,rating} = req.body;
       const contact = await product.create({
        name ,
        price,
        section,
        description,
        rating,
        id:req.user.id
       })
        res.status(200);
        res.json('created');
        
        
})




/////////////////////////
const getProudect= asyncHalende(async(req, res) =>{
    try{
      const theProduct = await product.findById(req.params.id);
    res.status(200);
    res.json(theProduct)
    }
    catch (err) {
        throw new Error('product is not available')
    }
})



/////////////////////////////
const getAllProudect = asyncHalende(async(req, res) =>{
     const products = await product.find();
    res.status(200);
    res.json(products)
})


/////////////////////////
const updateProudect = asyncHalende(async(req, res) =>{
   try{
      await product.findById(req.params.id)
    const updataProduct = await product.findByIdAndUpdate(
        req.params.id,
        req.body
    )
   }catch(err) {
    console.error(err)
   }
    res.status(200);
    res.json('success updata proudect')
})



///////////////////////////////////////

const deleteProudect = asyncHalende(async (req, res) => {
    try{
        const productToDelete = await product.findById(req.params.id);

    if (!productToDelete) {
        return res.status(404).json({ message: 'Product not found' });
    }

    await product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Successfully deleted product' });
    }catch(err) {
        throw new Error('er')
    }
    
});



module.exports={
    createProudect,
    getProudect,
    getAllProudect,
    updateProudect,
    deleteProudect

}