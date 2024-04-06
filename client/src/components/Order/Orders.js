import { Box, Button, Divider, Table, TableBody, TableCell,  TableRow, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { API } from '../../service/API';

const Orders = () => {


  const navigate=useNavigate();

  const print=()=>{
    window.print();
    navigate('/home');
    document.location.reload();
  }

  const{account}=useContext(DataContext);
  const date=Date();

  const {cartItems} = useSelector(state => state.cart);

  const [order,setOrder] = useState([]);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    totalAmount();
}, [cartItems]);


  const totalAmount = () => {
    let price = 0;
    cartItems.map(item => {
        price += item.cost
    })
    setPrice(price);
}

  useEffect(()=>{
    const fetchData = async ()=>{
        let response=await API.getOrder();
       if(response.isSuccess){
        setOrder(response.data);
       }
    }
    fetchData();
},[]) 
  return (
    <>
    {
    cartItems.length ?
    <Box>
    <center><Typography variant='h4' style={{fontFamily:'Times New Roman',fontWeight:600,marginTop:'20px',color:'blueviolet'}}>Dattakrupa Vegetable Suppliers</Typography></center>
    <Box style={{display:'flex',marginTop:'20px'}}> 
    <Typography style={{marginLeft:'10px',color:'red',fontWeight:600,fontFamily:'Times New Roman',fontSize:'20px'}}>Customer name:{account.name}</Typography>
    <Typography style={{marginLeft:'auto',marginRight:'10px',color:'green',fontFamily:'Times New Roman',fontSize:'20px',fontWeight:600}}>Date:{date.slice(0,16)}</Typography>
    </Box> 
    <Typography style={{fontWeight: 600, fontSize: 18,fontFamily:'Times New Roman',opacity:0.6,marginTop:'30px',marginLeft:'10px'}}>You bought ({cartItems?.length}) product</Typography>

          <Table style={{marginTop:'20px'}}>
                  <TableBody>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
               {     
              cartItems.map(item => (
                <TableRow>
                      <TableCell><Typography>{item.title}</Typography></TableCell>
                      <TableCell><Typography>{item.quantity}</Typography></TableCell>
                      <TableCell><Typography>{item.cost}</Typography></TableCell>
                </TableRow>
            ))
             }
    </TableBody>
    </Table>
    <Typography style={{padding:'20px',fontFamily:'Times New Roman',fontWeight:600,fontSize:'20px',borderTop:'2px dashed #e0e0e0'}}>
                Total Amount: {price + 10} <Box component='span'>(Pay at time of delivery)</Box></Typography> 
    </Box>
    :
    <Box>
       {           
           order && order.length>0 ? order.map(post=>(   
                  post.username === sessionStorage.getItem('username') &&
                  <Box>
                <center><Typography variant='h4' style={{fontFamily:'Times New Roman',fontWeight:600,marginTop:'20px',color:'blueviolet'}}>Dattakrupa Vegetable Suppliers</Typography></center>
                <Box style={{display:'flex',marginTop:'20px'}}>
                  <Typography style={{marginLeft:'10px',fontFamily:'Times New Roman',fontSize:'20px'}}>Customer name:{post.name}</Typography>
                  <Typography style={{marginLeft:'auto',marginRight:'10px',fontFamily:'Times New Roman',fontSize:'20px'}}>{new Date(post.orderDate).toDateString()}</Typography>
                </Box>
                <Divider style={{marginTop:'40px'}}/>
                <Table>
                  <TableBody>
                  <TableRow style={{border:'none',verticalAlign:'baseline'}}>
                      <TableCell>Sr.No.</TableCell>
                      <TableCell>Product name</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                    <TableRow style={{border:'none',verticalAlign:'baseline'}}>
                      <TableCell style={{border:'none'}}> 1</TableCell>
                      <TableCell style={{border:'none'}}><Typography>{post.product_name}</Typography></TableCell>
                      <TableCell style={{border:'none'}}><Typography>{post.qty}</Typography></TableCell>
                      <TableCell style={{border:'none'}}><Typography>{post.price}</Typography></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              <Typography style={{padding:'20px',marginTop:'20px',fontFamily:'Times New Roman',fontWeight:600,fontSize:'20px',borderTop:'2px dashed #e0e0e0'}}>
                Total Amount: {post.amount} <Box component='span'>(Pay at time of delivery)</Box></Typography> 
              </Box>
            )):<div style={{fontFamily:"Times New Roman",fontWeight:600,marginTop:'20px',opacity:.6,marginLeft:'20px'}}>Select the product which you want to deliver...</div>
        }
    </Box>
    }
    <Button variant='contained' style={{marginTop:'40px',borderRadius:'2px',marginLeft:'30px'}} onClick={()=>print()}>Print Bill</Button>
    <Button variant='contained' style={{marginTop:'40px',borderRadius:'2px',marginLeft:'30px'}} LinkComponent={Link} to ='/home'>Back</Button>
    </>
  )
}

export default Orders;