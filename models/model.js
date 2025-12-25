let mongoose = require("mongoose")
let sch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "role":{
        type:String,
        default:"patient"
    },
    "pwd":String,
    "specilization":String,
    "consultfee":String,
    "exp":String,
    "request":{
        type:String,
        default:"pending"
    },
})

let am=mongoose.model("users",sch)

module.exports=am