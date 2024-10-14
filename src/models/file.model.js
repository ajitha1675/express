const mongoose = require("mongoose");

const fileuploadedSchema = new mongoose.Schema({
     userId:{
        type: String,
     },
     filename:{
        type:String,
     },
     destination:{
        type:String,
     },

},{timestamps:true})

const fileuploaded = mongoose.model("file",fileuploadedSchema);

module.exports =  fileuploaded;