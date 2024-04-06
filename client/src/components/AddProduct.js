import { AppBar, Box, Button, FormControl, InputBase, TextareaAutosize } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {  useEffect, useState } from "react";
import { API } from "../service/API";
import letter from "../vegetables.webp"

const intialPost={
    title:"",
    description:"",
    picture:"",
    quantity:"",
    tagline:"",
    mrp:"",
    cost:"",
    categories:"",
    createDate:new Date()
}

const AddProduct=()=>{

    const [post,setPost]=useState(intialPost);
    const [file,setFile]=useState('');


    const location=useLocation();
    const navigate=useNavigate();

  const letter=post.picture ? post.picture :"http://localhost:3000/static/media/vegetables.58e39e8bc91f91fd1ada.webp";
  

    useEffect(()=>{
        const getImage=async ()=>{
            if(file){
                const data=new FormData();
                data.append("name",file.name);
                data.append("file",file);
                //API Call
              const response=await API.uploadfile(data);
                post.picture=response.data;
            }
        }
        getImage();
      post.categories=location.search?.split('=')[1] || 'All';
    },[file])

    const handleChange =(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }

    const savePost=async()=>{
        let response=await API.createPost(post);
        if(response.isSuccess){
            navigate('/add');
        }
    }

    return(

        <>
        <AppBar position="sticky" >
        <Box display="flex" marginLeft="auto">
    <Button LinkComponent={Link} to="/add"  variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning"> BACK</Button>
    </Box>
        </AppBar>
        <div>
            <Box style={{margin:"50px 100px"}}>
                <img style={{objectfit:"cover"}} src={letter} width="100%" height="300" />
                <FormControl style={{marginTop:"15px",display:"flex",flexDirection:"row"}}>
                    <label htmlFor="fileInput">
                        <AddCircleIcon fontSize="large" color="action"/>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                    <InputBase style={{flex:"1",margin:"0px 30px",fontSize:"18px",fontWeight:700,fontFamily:'Times New Roman'}}
                    onChange={(e) => handleChange(e)}  name="title" placeholder="Title"/>
                    <Button variant="contained" onClick={()=>savePost()}>Add Product</Button>
                    </FormControl>
                    <FormControl style={{marginTop:"10px",display:"flex"}}>
                    <InputBase style={{flex:"1",margin:"0px 30px",fontSize:"18px",fontWeight:700,fontFamily:'Times New Roman'}}
                    onChange={(e) => handleChange(e)}  name="tagline" placeholder="Tagline"/>
                     <InputBase type="number" style={{flex:"1",margin:"0px 30px",fontSize:"18px",fontWeight:700,fontFamily:'Times New Roman'}}
                    onChange={(e) => handleChange(e)}  name="quantity" placeholder="Quantity"/>
                    </FormControl>

                    <FormControl style={{marginTop:"10px",display:"flex",flexDirection:'row'}}>
                    <InputBase type="number" style={{flex:"1",margin:"0px 30px",fontSize:"18px",fontWeight:700,fontFamily:'Times New Roman'}}
                    onChange={(e) => handleChange(e)}  name="mrp" placeholder="Original MRP Price "/>
                   <InputBase type="number" style={{flex:"1",margin:"0px 30px",fontSize:"18px",fontWeight:700,fontFamily:'Times New Roman'}}
                    onChange={(e) => handleChange(e)}  name="cost" placeholder="Cost Price"/>
                    </FormControl>
                <TextareaAutosize  minRows={5} onChange={(e) => handleChange(e)}  name="description" placeholder="Add description" 
                   style={{width:"100%",marginTop:"20px",fontSize:"18px",border:"none",outline:"none"}} />
            </Box>
        </div>
        </>
    )
};
export default AddProduct;
