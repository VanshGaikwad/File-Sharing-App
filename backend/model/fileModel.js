import mongoose from "mongoose";
const fileSchema= new mongoose.Schema({
    path:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }
})
const fileModel= mongoose.model("File",fileSchema);
export default fileModel;