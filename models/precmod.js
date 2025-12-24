let mongoose = require("mongoose")
let sch=new mongoose.Schema({
   "pid":String,
   "diagonsis":String,
   "medicines":String,
   "dosage":String,
   "duration":String,
   "notes":String,
   "did":String
})

let pm=mongoose.model("prec",sch)

module.exports=pm