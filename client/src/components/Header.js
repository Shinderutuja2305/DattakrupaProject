import React from 'react';
import {AppBar, Box, Button, MenuItem, Select, Toolbar, Typography} from '@mui/material';
import user from '../vegetables.webp'
import Search from './Home/Search';
import { Link } from 'react-router-dom';



const Header=()=>{
    return (
		<>
        <AppBar position="sticky"
		sx={{
			background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
				}} style={{overflow:'overlay'}}>
            <Toolbar>   
			<img src={user} height="50" width={140} style={{margin:0}}/> &nbsp;&nbsp;
            <Typography variant="h5" style={{fontFamily:"Times New Roman"}}> Dattakrupa Vegetable Suppliers </Typography>
			&nbsp;&nbsp;
			<Search/>
			&nbsp;&nbsp;
		<Box display="flex" marginLeft="auto">
		<Button  LinkComponent={Link} to="/auth" variant='contained' 
		sx={{margin:1,boderRadius:10}}  color="warning">Login</Button>
		<Button  LinkComponent={Link} to="/seller" variant='contained' 
		sx={{margin:1,boderRadius:10}}  color="warning"> Seller</Button>&nbsp;
	   <Typography style={{margin:"3px",padding:"2px",fontFamily:"Times New Roman",fontSize:"25px"}}>More
            <Select style={{height:30,textDecorationColor:'blue'}}
             id="demo-simple-select-standard" label="Menu"
            > <MenuItem> <a href='/about' style={{textDecoration:'none',fontFamily:'Times New Roman',fontWeight:800}}>About Us</a></MenuItem>
              <MenuItem><a href='/contact' style={{textDecoration:'none',fontFamily:'Times New Roman',fontWeight:800}}>Contact Us</a></MenuItem>
		   </Select>
        </Typography>
		</Box>
        </Toolbar>
        </AppBar>
		{sessionStorage.clear()}
		</>   
    )
};

export default Header;