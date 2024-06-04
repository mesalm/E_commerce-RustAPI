const mongoose = require('mongoose');
const env = require('dotenv');
const DBconct =async ()=>{
    try{
       const connect= await mongoose.connect(process.env.CONNECTION_STRING)
         console.log('Connecting to database',
            connect.connection.host,
            connect.connection.name,
         )
    }catch(e){
        throw new Error('Couldn\'t connect to Mongoose')
    }
}
module.exports =DBconct ;