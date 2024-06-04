const { Timestamp } = require( 'mongodb' );
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'



    },
name:{
    type : 'string',
    required: [true , 'name is required'],
},
email :{
    type : 'string',
    required : [true,'email is required'], 
    unique : true
},
password :{
     type : 'string',
     required : [true,'password is required'],
     minlength : [6 , 'password must be at least 6 characters']
},
// role:{
//     type: String,
//     enum: ['user', 'admin'],
//     required: false,
//     default: 'user'
// },

},{
    timestamps :true,
 });

module.exports = mongoose.model('User', userSchema)