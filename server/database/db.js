import mongoose from "mongoose";


const Connection = async () =>{
     //const URL =`mongodb://127.0.0.1:27017/Dattakrupa_Db`;
     try{
       // await mongoose.connect(URL);
        mongoose.set('strictQuery', false);
        await mongoose.connect("mongodb://127.0.0.1:27017/Dattakrupa_Db", { useNewUrlParser: true });
        console.log("connection");

     }
     catch(error){
        console.log("error in connect",error);
     }
}
export default Connection;