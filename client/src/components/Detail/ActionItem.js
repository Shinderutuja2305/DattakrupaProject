import React, { useContext, useState } from 'react';
import { Box, Button,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { API } from '../../service/API';
import { DataContext } from '../../context/DataProvider';


const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
      padding: '20px 40px'
  }
}))

const InitialValues = {
  username: '',
  name:'',
  product_name: '',
  qty:'',
  price:'',
  amount:'',
  orderDate: new Date()
};

const ActionItem = ({ product }) => {

  const navigate=useNavigate();

  const [quantity, setQuantity] = useState(1);

  const [ order, setOrder ] = useState(InitialValues);

  const {account}=useContext(DataContext);
  
  const dispatch=useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product._id, quantity));
    navigate('/cart');
}

  const orderadd = async () => {
    
    order.username=sessionStorage.getItem('username');
    order.name=account.name;
    order.product_name=product.title;
    order.qty=quantity;
    order.price=product.cost;
    order.amount=order.qty*order.price;
       await API.addOrder(order);
    navigate('/getorder');
  }

  return (
    <>
    <LeftContainer>
      <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0'}}>
      <img src={product.picture} alt='product' style={{padding: '15px',width:'95%'}}/>
      </Box>
    <Button variant='contained' onClick={() => addItemToCart()} style={{width:'48%',background:'#ff9f00',borderRadius: '2px',height: '50px',color: '#FFF',marginTop:'10px'}}>
      <ShoppingCartIcon/>Add to Cart</Button>
    <Button variant="contained" onClick={()=>orderadd()} style={{width:'48%',background:'#fb641b',borderRadius: '2px',height: '50px',color: '#FFF',marginLeft:'15px',marginTop:'10px'}}>
      <FlashOnIcon/>Buy Now</Button>
    </LeftContainer>
    </>
    )
}

export default ActionItem;