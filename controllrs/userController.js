const asyncHalende =require("express-async-handler");
const User = require('../moudel/userModule');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require( "mongoose" );

const registeUser = asyncHalende(async(req ,res)=>{
    try{
        const {name , email, password} =req.body
        const hash = await bcrypt.hash(password ,10);
         const newUser = await User.create({
            name,
            email,
            password : hash,
            _id : req.params.id
       
         })
         res.status(200);
         res.json(newUser);
    }catch(e){
        throw new Error('registe user failed')
    } 
});

////////////////////////////////////////////////////////////////////
const login =asyncHalende(async (req ,res)=>{
       const {email , password}= req.body
    if (!email || !password){
        throw new Error('Please enter a valid email and password');
    }
     const user = await User.findOne({email})
     if(user &&((await bcrypt.compare(password, user.password)))){
        const accsesToken = await jwt.sign({
            name:{
                username: user.username,
                email: user.email,
                id : user.id

            }
        }, process.env.JWT_SECRET,
          {expiresIn:"50m"})
              res.status(200);
             res.json( {titel :"access token" ,message:accsesToken});
     }  else{
        throw new Error(" email and password is incorrect");
     }})
    ////////////////////////////////////////////////////////////////////////
const currentUser = asyncHalende( async(req ,res)=>{
    res.status(200)
    res.json(req.user);
        
 })

 module.exports ={
    registeUser,
    login,
    currentUser,
 }