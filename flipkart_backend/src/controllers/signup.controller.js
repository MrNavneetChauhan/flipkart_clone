
const express = require("express");
const router = express.Router();
const User = require("../models/signup.model");
const crudController = require("./crud.controller");


router.post("/signup", async(req,res)=>{

    const exist = await User.findOne({user_name:req.body.user_name})
    if(exist){
        return res.status(500).send("username is already taken")
    }


    const user = await User.create(req.body);
    return res.status(201).send(user)
} )

router.post("/signin",async(req,res)=>{
    const user = await User.findOne({user_name:req.body.user_name,password:req.body.password});

    if(!user){
        return res.status(401).send("Invalid user")
    }
    return res.status(201).send(req.body.user_name)

})

module.exports = router;