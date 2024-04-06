import Product from '../model/Product.js';

export const createPost=async(request,response)=>{
    try{
        const post=await new Product(request.body);
        post.save();
        return response.status(200).json({msg:"post saved successfully"});
    }catch(error){
        return response.status(500).json(error);
    }
}

export const getAllPosts=async(request,response)=>{
    let category=request.query.category;
    let posts;
    try{
       // posts=await Product.find({});
        if(category)
        {
             posts=await Product.find({categories:category});
        }
        else {
            posts=await Product.find({});
        }

        return response.status(200).json(posts);
    }catch(error){
        return response.status(500).json({msg:error.message});
    }
}

export const getPost=async(request,response)=>{
    try{
       const post=await Product.findById(request.params.id);
       return response.status(200).json(post);
    }catch(error){
        return response.status(500).json({msg:error.message});
    }
}

export const deleteBlog=async(request,response)=>{
    try{
        const post=await Product.findById(request.params.id);
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

export const updatePost=async(request,response)=>{
    try{
        const post=await Product.findById(request.params.id);
        if(!post){
            return response.status(400).json({msg:"post not found"});
        }
        await Product.findByIdAndUpdate(request.params.id,{ $set :request.body});
        return response.status(200).json({msg:"post updated successfully"});
    }
    catch(error){
        return response.status(500).json({msg:error.message});
    }
}

export const getItems=async(request,respone)=>{
    try{
        const blogs=await Product.find({});
        return respone.status(200).json(blogs);
    }
    catch(error){
        return respone.status(500).json({msg:error.message});
    }
}