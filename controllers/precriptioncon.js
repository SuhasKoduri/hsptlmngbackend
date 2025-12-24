const pm = require("../models/precmod")

let createprec=async(req,res)=>{
    try{
        let newprec=new pm(req.body) 
        await newprec.save()
        res.json({"msg":"Prescription created successfully"})
    }catch(err){
        res.json({"msg":"Error in creating prescription"})
        console.log(err)
    }   
}

let getprec=async(req,res)=>{
    try{
        let data=await pm.find({"pid":req.params.pid})
        res.json(data)
    }catch(err){
        res.json({"msg":"Error in fetching prescriptions"})
        console.log(err)
    }
}


let docprec=async(req,res)=>{
    try{
        let data=await pm.find({"did":req.params.did})
        res.json(data)
    }catch(err){
        res.json({"msg":"Error in fetching prescriptions"})
        console.log(err)
    }
}


let getallprec=async(req,res)=>{
    try{
        let data=await pm.find()
        res.json(data)
    }
    catch{
        res.json({"msg":"Error in fetching prescriptions"})
        console.log(err)
    }
}
module.exports={createprec,getprec,docprec,getallprec}