import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:
    {
        type:String,
        required:true
    },
    picture:
    {
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    tagline:
    {
        type:String,
        required:true
    },
    mrp:{
        type:Number,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    categories:
    {
        type:String,
        required:true
    },
    createDate:{
        type:Date
    }
});

const Product=mongoose.model('product',productSchema);
export default Product;

