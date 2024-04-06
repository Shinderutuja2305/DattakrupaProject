import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import { addElipsis } from '../../utils/common-utils';
import GroupButton from './GroupButton';
import { useDispatch } from 'react-redux';
 import {removeFromCart} from '../../redux/actions/cartAction'

const CartItem = ({item }) => {

  const [counter,setCounter]=useState(1);

  const dispatch=useDispatch();

  const removeItemFromCart=(id)=>{
    dispatch(removeFromCart(id));
  }


  return (
    <>
    <Box style={{borderTop:'1px solid #f0f0f0',borderRadius:'0px',display: 'flex'}}>
        <Box style={{margin:'20px', display:'flex',flexDirection:'column'}}>
        <img src={item.picture} style={{ height: 110, width: 110 }} alt='product'/>
        <GroupButton counter={counter} setCounter={setCounter}/>
        </Box>
        <Box style={{ margin: 20 }}>
            <Typography style={{fontFamily:'Times New Roman'}}>{addElipsis(item.title,10)}</Typography>
            <Typography style={{color:'#878787',fontSize:'15px',marginTop:'10px',fontFamily:'Times New Roman'}}>Seller:Dattakrupa Vegetable Suppliers</Typography>
            <Typography style={{fontFamily:'Times New Roman',fontWeight:600,opacity:.7}}>Quantity:{counter}</Typography>
            <Typography style={{margin: '20px 0'}}>
                            <span style={{ fontSize:'18px',fontWeight: 600}}>₹{item.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{item.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
           </Typography>
           <Button style={{marginTop:'20px',fontSize:'16px',fontWeight:600,color:'#000',fontFamily:'Times New Roman'}}
           onClick={() => removeItemFromCart(item._id)}>Remove</Button>
        </Box>
    </Box>
    </>
    )
}   


export default CartItem;