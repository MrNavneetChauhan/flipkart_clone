const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    user_name:{type:String,required:true,unique:true},
    email_id:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    mobile:{type:String,required:true},
    
},
{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("signup",signupSchema)