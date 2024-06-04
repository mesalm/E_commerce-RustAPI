const { Timestamp } = require( "mongodb" );
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
   // _id:{
   //    type: mongoose.Schema.Types.ObjectId,
   //    required: true,
   //    ref: 'product'
   // },
     name:{
        type : 'string',
        required: [true ,'name of product is required']
     },
     price:{
        type : 'string',
        required: [true ,'price of product is required']
     },
      section:{
        type : 'string',
        required: [true ,'section of product is required']
     },
     description:{
        type : 'string',
        required: true
     },
     rating: {
        type : 'number',
        required: false
     }

} ,{Timestamp : true})

module.exports=mongoose.model('product' , productSchema)