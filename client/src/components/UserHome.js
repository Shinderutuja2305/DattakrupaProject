import React, {  useEffect } from 'react'
import Footer from './Footer';
import {  Box,  Divider} from '@mui/material';
import Slide from './Home/Slide';
import { getProducts  as listProducts} from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import MidComponent from './Home/MidComponent';
import UserHeader from './Home/UserHeader';



const UserHome=() =>{
  const {products} = useSelector(state => state.getProducts);
  console.log(products);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])
  return (
  <>
       <UserHeader/>
        <div>
        <Box style={{padding:'5px'}}>
        <Slide products={products} title='Vegetable'/>
        </Box>
        <Divider/>
        <Box style={{background:'blueviolet'}}>
        <MidComponent/>
        </Box>
        <Divider/>
        <Box style={{padding:'10px'}}>
        <Slide products={products} title='Fruit'/>
        </Box>
        </div>
        <Footer/>
</> 
 )
}

export default UserHome;