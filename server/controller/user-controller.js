import User from "../model/User.js";
import Token from "../model/Token.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

export const signupUser= async (request,response) => {
try{
    const hashedPassword=await bcrypt.hash(request.body.password,10);

    const user={ username:request.body.username, name:request.body.name, email:request.body.email,contact:request.body.contact, address:request.body.address,password:hashedPassword}

    const newUser=new User(user);
    await newUser.save();

    return response.status(200).json({msg:"Signup successful"})
}catch(error){
    return response.status(500).json({msg:"Error while signup the user"})
}
}

export const loginUser= async(request,response)=>{
    let user=await User.findOne({username:request.body.username});
    if(!user){
        return response.status(400).json({msg:"username does not match"});
    }
    try{
        let match=await bcrypt.compare(request.body.password,user.password);
        if(match){
            const accessToken=jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY,{ expiresIn:'15m' });
            const refereshToken=jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY);
            
            const newToken= new Token({token:refereshToken })
            await newToken.save();

            return response.status(200).json({ accessToken:accessToken,refereshToken:refereshToken,name:user.name,username:user.username});
        
        }else{
            response.status(400).json({msg:"Password does not match"});
        }
    }catch(error){
        return response.status(500).json({msg:"Error while login in user"});
        
    }
}

export const getAllUser=async(request,respone)=>{
    try{
        const blogs=await User.find({});
        return respone.status(200).json(blogs);
    }
    catch(error){
        return respone.status(500).json({msg:error.message});
    }
}

export const deleteUser=async(request,response)=>{
    try{
        const post=await User.findById(request.params.id);
        if(!post)
        {
            return response.status(400).json({msg:"post not found"});
        }
        await post.delete();
        return response.status(200).json({msg:"post deleted successfully"});
    
    }catch(error){
        return response.status(500).json({msg:error.message});
    }
}