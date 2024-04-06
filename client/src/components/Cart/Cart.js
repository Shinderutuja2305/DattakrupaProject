import { Box, Button, Grid, Typography,styled } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import UserHeader from '../Home/UserHeader';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/API';
import { DataContext } from '../../context/DataProvider';


const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  background:'#f2f2f2',
  [theme.breakpoints.down('sm')]: {
      padding: '15px 0'
  }
}));
const Cart = () => {
const {cartItems} = useSelector(state => state.cart);

const navigate=useNavigate();

  
const InitialValues = {
  username: '',
  name:'',
  product_name: '',
  qty:'',
  price:'',
  amount:'',
  orderDate: new Date()
};
const {account}=useContext(DataContext);
const [ order ] = useState(InitialValues);
// cartItems[].title
const addtoorder = async()=>{
  for(let i=0;i<=cartItems.length;i++)
  {
  order.username=sessionStorage.getItem('username');
  order.name=account.name;
  order.product_name=cartItems[i].title;
  order.price=cartItems[i].cost;
  order.qty=1;
  order.amount=order.price*order.qty;
  await API.addOrder(order);
  }
}

  const orderadd =() =>{
    addtoorder();
    navigate('/getorder');
  }


  return (
    <>
    <UserHeader/>
    {
      cartItems.length ?
      <Component container>
        <Grid item lg={9} md={9} sm={12} xs={12} style={{backgroundColor:'#fff'}}>
          <Box style={{padding:'15px 24px',background:'#fff'}}>
            <Typography style={{fontWeight: 600, fontSize: 18,fontFamily:'Times New Roman'}}>My Cart ({cartItems?.length})</Typography>
          </Box>
          {
              cartItems.map(item => (
                <CartItem item={item}/>
            ))
          }
          <Box style={{padding:'16px 22px',background:'#fff',boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
       borderTop:'1px solid #f0f0f0'}}>
            <Button style={{display: 'flex', marginLeft:'auto',background:'#fb641b',color:'#fff',
       borderRadius:'2px',width:'250px',height:'51px'}} onClick={()=>orderadd()}>Place order</Button>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12} >
        <TotalView cartItems={cartItems}/>
        </Grid>
      </Component>
      :<EmptyCart/>
    }
    <div style={{background:'#f2f2f2',height:180}}>
    </div>
    </>
  )
}

export default Cart;