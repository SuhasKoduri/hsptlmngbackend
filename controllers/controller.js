const am = require("../models/model")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")
let reg=async(req,res)=>{
    try{
        let obj=await am.findById(req.body._id)
        if(obj){
            res.json({"msg":"User already exists"})
        }
        else{
            let hashpwd=await bcrypt.hash(req.body.pwd,10)
            let newobj=new am({...req.body,"pwd":hashpwd})
            await newobj.save()
            res.json({"msg":"Registration successful"})
        }
    }
    catch(err){
        res.json({"msg":"Registration failed"})
        console.log(err)
    }
}

let login=async(req,res)=>{
    try{
        let obj=await am.findById(req.body._id)
        if(obj){
            let cpwd=await bcrypt.compare(req.body.pwd,obj.pwd)
            if(cpwd){
                res.json({"role":obj.role,"name":obj.name,"token":jwt.sign({"_id":obj._id},process.env.secpwd),"_id":obj._id})
            }
            else{
                res.json({"msg":"Invalid password"})
            }
            }
        else{
            res.json({"msg":"User not found"})
        }
    }
    catch(err){
        res.json({"msg":"Login failed"})
        console.log(err)
    }
}

let doc=async(req,res)=>{
    try{
        let data=await am.find({"role":"doctor"},{pwd:0})
        res.json(data)
    }catch(err){
        res.json({"msg":"Error in fetching doctors"})
        console.log(err)
    }
}


let allusr=async(req,res)=>{
    try{
        let data=await am.find({},{pwd:0})
        res.json(data)
    }
    catch(err){
        console.log(err)
    }
}

let alldr=async(req,res)=>{
    try{
        let data=await am.find({"role":"doctor"},{ pwd: 0 } )
        res.json(data)
    }
    catch(err){
        console.log(err)
    }
}


let deluser=async(req,res)=>{
    try{
        await am.findByIdAndDelete(req.params._id)
        res.json({"msg":"deleted"})
    }
    catch(err){
        console.log(err)
    }
}
module.exports={reg,login,doc,allusr,deluser,alldr}