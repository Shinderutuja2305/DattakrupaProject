import mongoose from "mongoose";

const queryschema=mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    user_email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true
    }
});

const Querie=mongoose.model('querie',queryschema);
export default Querie;