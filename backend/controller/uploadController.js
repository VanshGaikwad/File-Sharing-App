import fileModel from "../model/fileModel.js";
import path from "path";
import dotenv from "dotenv";


export const UploadController = async(req,res)=>{
    try {
        dotenv.config();
        const backendUrl = process.env.BACKEND_URL;
        // funtionality to handle file upload will be here
        // console.log("File received:");
        // console.log(req.file);
        const fileObject={
            path:req.file.path,
            name:req.file.originalname
        }
            const file =await fileModel.create(fileObject);
            console.log(file);
            return res.status(200).json({path:`${backendUrl}/files/${file._id}`});
        
    } catch (error) {
        return res.status(500).json({message:"Something went wrong!"});
    }
}

export const DownloadController = async(req,res)=>{
    try {
        const file = await fileModel.findById(req.params.fileId);
        if(!file){
            return res.status(404).json({message:"File not found!"});
        }
        res.download(file.path,file.name);

    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
}