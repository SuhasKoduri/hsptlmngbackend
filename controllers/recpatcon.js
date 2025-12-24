const appointm = require("../models/appointmodel")
let rm = require("../models/receptionmodel")

let patdet=async(req,res)=>{
    try{
        let data=await rm.find()
        res.json(data)
    }
    catch(err){
        console.log(err)
        res.json({"msg":"Error occurred"})
    }
}

let patdetdoc=async(req,res)=>{
    try{
        let data=await rm.find({"did":req.params.did})
        res.json(data)
    }
    catch(err){
        console.log(err)
        res.json({"msg":"Error occurred"})
    }
}

let recaddpat=async(req,res)=>{
    try{
        let exists=await rm.findOne({"_id":req.body._id})
        if(exists){
            res.json({"msg":"Patient with this ID already exists"})
            return
        }
        let data=new rm(req.body)
        data.save()
        res.json({"msg":"Patient added successfully"})
    }
    catch(err){
        console.log(err)
        res.json({"msg":"Error occurred"})
    }
}



let updateappoints=async(req,res)=>{
    try{
        console.log("Incoming ID:", req.body.pid);
        await appointm.findOneAndUpdate({ pid: req.body.pid},{ status: req.body.status });
        res.json({"msg":"Appointment updated successfully"})
        console.log("succes")
    }catch(err){
        res.json({"msg":"Error in updating appointment"})
        console.log(err)
    }   
}
module.exports={patdet,recaddpat,patdetdoc,updateappoints}