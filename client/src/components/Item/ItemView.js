import { Box, Button, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { API } from "../../service/API";
import LocalIcon from '@mui/icons-material/LocalOffer';
import Comments from "../Comments/Comments.js";



const ItemView=()=>{


    const {id}=useParams(); 
    const [product,setPosts]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
         const response= await API.getPostById(id);
            if(response.isSuccess){
                setPosts(response.data);
            }
        }
        fetchData();
    },[] )

    const date = new Date(new Date().getTime()+(1*24*60*60*1000));



    return(


        <>
        
        {
            <Box style={{margin:'20px 100px'}}>
            <img src={product.picture} style={{width:'60%',height:'40vh',objectfit:'cover'}}/>
            <Typography style={{margin:'10px'}}>{product.title}</Typography>
                  <Typography>
                            <span style={{ margin:'10px',fontSize: 28 }}>₹{product.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                </Typography>
                    <Typography style={{margin:'10px',fontSize:'18px',color:'blueviolet',fontWeight:600}}>Available Offers</Typography>
                <Box style={{margin:'10px',verticalAlign:'baseline'}}>
                    <Typography style={{fontSize:'14px',marginTop:'5px'}}><LocalIcon style={{marginRight:'10px',color:'#00CC00'}} fontSize='small'/>Delivery only in Pimpri Area...</Typography>
                </Box>
                <Table>
                    <TableBody>
                    <TableRow style={{border:'none',verticalAlign:'baseline'}}>
                        <TableCell style={{ color: '#878787',border:'none' }}>Quantity</TableCell>
                        <TableCell style={{ fontWeight: 600 ,border:'none'}}>{product.quantity}</TableCell>
                        </TableRow>
                        <TableRow style={{border:'none',verticalAlign:'baseline'}}>
                        <TableCell style={{ color: '#878787',border:'none' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 ,border:'none'}}>Delivery by {date.toDateString()}</TableCell>
                        </TableRow>
                        <TableRow style={{border:'none',verticalAlign:'baseline'}}>
                        <TableCell style={{ color: '#878787',border:'none' }}>Description:</TableCell>
                        <TableCell style={{  border:'none'}}>{product.description}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Comments product={product}/>
         </Box>

        }
        
        <Button style={{margin:'10px'}} variant="contained" LinkComponent={Link} to="/" >Back</Button>
        </>
    );
}
export default ItemView;