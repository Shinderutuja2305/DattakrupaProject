import Querie from "../model/Querie.js";



export const userQuery=async(request,response)=>{
    try{
        const post=await new Querie(request.body);
        post.save();
        return response.status(200).json({msg:"post saved successfully"});
    }catch(error){
        return response.status(500).json(error);
    }
}


export const getAllquery=async(request,respone)=>{
    try{
        const blogs=await Querie.find({});
        return respone.status(200).json(blogs);
    }
    catch(error){
        return respone.status(500).json({msg:error.message});
    }
}