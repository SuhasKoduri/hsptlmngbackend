let mongoose = require("mongoose")
let appointsch=new mongoose.Schema({
    "pid":String,
    "did":String,
    "date":String,
    "time":String,
    "status":{
        type:String,
        default:"pending"
    }
})

let appointm=mongoose.model("appoints",appointsch)

module.exports=appointm