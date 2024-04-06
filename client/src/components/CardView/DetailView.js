import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { API } from "../../service/API";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {  useNavigate } from "react-router-dom";
import Comments from "../Comments/Comments";


const DetailView=()=>{


    const {id}=useParams(); 
    const [product,setPosts]=useState([]);

    const navigate=useNavigate();

    const category='all';

    useEffect(()=>{
        const fetchData=async()=>{
         const response= await API.getPostById(id);
            if(response.isSuccess){
                setPosts(response.data);
            }
        }
        fetchData();
    },[] )

    const deletePost=async()=>{
        let respone=await API.deleteBlog(product._id);
        if(respone.isSuccess){
            navigate('/add');
        }
    }


    return(
        <>
        {
            <Box style={{margin:'20px 100px'}}>
            <img src={product.picture} style={{width:'70%',height:'50vh',objectfit:'cover'}}/>
            <Typography style={{fontSize:'38px',fontFamily:'Times New Roman',fontWeight:600,textAlign:'center',margin:'20px 0 10px 0',wordBreak:'break-word'}}>
                {product.title}</Typography>
            <Box style={{color:'#878787',margin:'10px 0',display:'flex'}}>
            <Typography style={{color:'blue',fontWeight:600,fontFamily:'Times New Roman'}}>
                Tagline: <Box component="span" style={{fontWeight:600,color:'blue'}}>{product.tagline}</Box></Typography>
            <Typography style={{marginLeft:'auto'}}>{new Date(product.createDate).toDateString()}</Typography>
            <Box style={{float:'right',padding:'5px'}}>
            <Link to={`/update/${product._id}`}>
            <EditIcon color='primary' style={{margin:'5px',padding:'5px',border:'1px solid #878787',borderRadius:'10px'}}/>
            </Link>
            <DeleteIcon color='error' style={{margin:'5px',padding:'5px',border:'1px solid #878787',borderRadius:'10px'}} onClick={()=>deletePost()} />
            </Box>
            </Box>
            <Box style={{color:'#878787',margin:'10px 0',display:'flex'}}>
                <Typography style={{color: 'blueviolet',fontWeight:600}}>Quantity:
                <Box component="span" style={{fontWeight:600,color:'blueviolet'}}>{product.quantity}</Box></Typography>
                <Typography style={{marginLeft:'auto',color: '#878787',fontWeight:600}}>Cost Price:₹{product.cost}</Typography>
                <Typography style={{marginLeft:'auto',textDecoration:'line-through',color:'green'}}>MRP:₹{product.mrp}</Typography>

            </Box>
            <Typography style={{wordBreak:'break-word',fontSize:'20px',fontFamily:'Times New Roman',opacity:.6}}>Description:{product.description}</Typography>
            <Box style={{marginTop:'30px'}}>
            <Comments product={product}/>
            </Box>
            </Box>
             }
        <Button style={{margin:'10px'}} variant="contained" LinkComponent={Link} to="/add" >Back</Button>
        </>
    );
}
export default DetailView;