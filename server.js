const express = require('express');
const errorHandler  = require('./middleware/errorHandler ');
const DBconct = require( './confige/dbConiction' );
const env = require('dotenv').config();
const app =express();
app.use(express.json());
DBconct();
///////////////////////////////////////////////////////////////////////////////
const port = process.env.PORT || 3001 ;
 app.use('/api/v1/proudects' , require('./routes/proudectRouts'));
 app.use('/api/v1/users', require('./routes/userRout'));
// app.use('/api/v1/cart' , require('./routes/cartRouts'));
 app.use(errorHandler)

app.listen(port ,()=>{
    console.log(`listening on port ${port}`);
});