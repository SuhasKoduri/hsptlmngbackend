let appointm=require("../models/appointmodel")
let appoint=async(req,res)=>{
    try{
        let data=await appointm.find({"pid":req.params.pid})
        res.json(data)
    }catch(err){
        res.json({"msg":"Error in fetching appointments"})
        console.log(err)
    }
}

let book=async(req,res)=>{
    try{
        let newappoint=new appointm(req.body)
        await newappoint.save()
        res.json({"msg":"Appointment booked successfully"})
    }catch(err){
        res.json({"msg":"Error in booking appointment"})
        console.log(err)
    }  
}


let getappoint=async(req,res)=>{
    try{
        let data=await appointm.find({"did":req.params.did})
        res.json(data)
    }catch(err){
        res.json({"msg":"Error in fetching all appointments"})
        console.log(err)
    }
}


let getallappoint=async(req,res)=>{
    try{
        let data=await appointm.find({})
        res.json(data)
    }catch(err){
        res.json({"msg":"Error in fetching all appointments"})
        console.log(err)
    }
}


let updateappoint=async(req,res)=>{
    try{
        await appointm.findByIdAndUpdate({ _id: req.body._id },{ status: req.body.status });
        res.json({"msg":"Appointment updated successfully"})
    }catch(err){
        res.json({"msg":"Error in updating appointment"})
        console.log(err)
    }   
}

let delappoint=async(req,res)=>{
    try{
        await appointm.findOneAndDelete({ pid: req.params.pid });
        res.json({"msg":"Appointment deleted successfully"})
    }catch(err){
        res.json({"msg":"Error in deleting appointment"})
        console.log(err)
    }   
}


let getpat=async(req,res)=>{
    try{
        let data=await appointm.find({"did":req.params.did,"status":"approved"})
        res.json(data)
    }
    catch(err){
        res.json({"msg":"NO PATIENTS FOUND"})
        console.log(err)
    }
}


let recapp=async(req,res)=>{
    try{
        let newappoint=new appointm(req.body)
        await newappoint.save()
        res.json({"msg":"Appointment booked successfully"})
    }catch(err){
        res.json({"msg":"Error in booking appointment"})
        console.log(err)
    }
}


let getallpenappoint=async(req,res)=>{
    try{
        let data=await appointm.find({"status":"pending"})
        res.json(data)
    }catch(err){
        res.json({"msg":"Error in fetching all appointments"})
        console.log(err)
    }
}
module.exports={appoint,book,getappoint,updateappoint,getpat,recapp,getallappoint,delappoint,getallpenappoint}