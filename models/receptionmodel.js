let mongoose = require("mongoose")
let sch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "role":{
        type:String,
        default:"patient"
    },
    "age":String,
    "gender":String,
    "specilization":String,
    "phnno":String,
    "status":{
        type:String,
        default:"pending"
    }
})

let rm=mongoose.model("recpatdet",sch)

module.exports=rm