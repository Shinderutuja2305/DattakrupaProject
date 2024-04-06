import React,{useEffect} from 'react'
import NavBar from './Home/NavBar';
import Banner from './Home/Banner';
//import Ban from './Home/Ban';
import { Box, Divider } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { getProducts  as listProducts} from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Items from './Item/Items';


const Home = () => {

  const {products} = useSelector(state => state.getProducts);
  console.log(products);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])
  return (
  <>
   <Header/>
    <NavBar/>
    <Box style={{padding:'10px',background:'#F2F2F2'}}>
    <Banner/>
    </Box> 
  {/*
    <Box style={{padding:'10px',background:'white'}}>
      <Ban/>
  </Box>
  */}  
  <Divider/>
       <Box style={{padding:'10px'}}>
        <Items products={products} title='Vegetable'/>
        </Box>
        <Divider/>
        <Box style={{padding:'10px'}}>
        <Items products={products} title='Fruit'/>
        </Box>
  <Footer/>
    </>
  )
}

export default Home;
