import mongoose from "mongoose";

const orderSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    product_name:
    {
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    orderDate: {
        type: Date,
        required:true
    }
});

const Order=mongoose.model('order',orderSchema);
export default Order;

