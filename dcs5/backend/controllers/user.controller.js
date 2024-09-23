const UserModel= require('../models/user.model');
const generator = require('generate-password');

const register=async(req,res)=>{

    const {name,email,username,password}=req.body;
    if(!name || !email || !username || !password){
        return res.status(403).send({message:'All Fields are mandatory'});
    }
    const user = await UserModel.findOne({email});
    if(user){
        return res.status(403).send({message:'Email Id already exist'});
    }
    const newUser= new UserModel({name,email,username,password});
    const resp = await newUser.save();
    return res.status(201).send({message:'User Created Successfully',resp});
}
const generatePassword=async(req,res)=>{
    var password = generator.generate({
        length: 10,
        numbers: true
    });
    res.status(200).send(password);
}
module.exports={
    register,
    generatePassword
}