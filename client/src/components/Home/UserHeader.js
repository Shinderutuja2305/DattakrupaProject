import { AppBar ,Toolbar,Button,Typography,Box,  Badge} from '@mui/material';
import React  from 'react';
import Searchs from './Searchs';
import { Link } from 'react-router-dom';
import user from '../../vegetables.webp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import {DataContext} from '../../context/DataProvider';
import { useSelector } from 'react-redux';
import Cat from './Cat';

const UserHeader = () => {

   // const { account } = useContext(DataContext);

    const {cartItems}=useSelector(state => state.cart);


  return (

    <>
    <AppBar position="sticky"
		sx={{
			background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
				}} style={{overflow:'overlay'}}>   
            <Toolbar>   
			<img src={user} alt='user' height="50" width={140} style={{margin:0}}/> &nbsp;&nbsp;
        <Typography  variant="h5" style={{fontFamily:"Times New Roman"}}> <Link to={'/home'} style={{textDecoration:'none',color:'inherit'}}>Dattakrupa Vegetable Suppliers</Link> </Typography>
        &nbsp; 
      <Searchs/>  
      &nbsp; &nbsp;
      <Typography style={{fontFamily:'Times New Roman',fontWeight:600,fontSize:'19px'}}> {sessionStorage.getItem('username')}
      </Typography>
      &nbsp;&nbsp;
      <Cat/>
		<Box display="flex" marginLeft="auto">
		<Button  LinkComponent={Link} to="/" variant='contained' 
		sx={{margin:1,boderRadius:10}}  color="warning">Logout</Button>
		&nbsp;&nbsp;
    <Link style={{textDecoration:'none',color:'inherit'}} to='/cart'>
    <Badge badgeContent={cartItems?.length} color="secondary" style={{marginTop:'10px'}}>
           <ShoppingCartIcon fontSize='large'/>
    </Badge>
    </Link>
    </Box>
        </Toolbar>
        </AppBar>
    </>
  )
}

export default UserHeader;