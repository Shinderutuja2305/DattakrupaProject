import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography,styled} from '@mui/material';
import React, { useState } from 'react';
import user from '../user.png';
import pic from '../images/pic.jpg'
import { Link } from 'react-router-dom';
import Footer from './Footer.js';

const Container = styled(Typography)(({ theme }) => ({
  padding:'60px',
  [theme.breakpoints.down('sm')]: {
      padding:'0px'
  }
}));

function Dashboard() {

  const [value,setValue]=useState();

  return (
    <>
    <AppBar position="sticky"
		sx={{
			background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
				}} style={{	overflow:'overlay'}}>
    <Toolbar>  
      <img src={user} height={67} width={100}/> 
    <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
                <Tabs textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={Link} to="/add" style={{fontFamily:'Times New Roman',fontWeight:600}} label="Products"/>
                    <Tab LinkComponent={Link} to="/viewuser" style={{fontFamily:'Times New Roman',fontWeight:600}} label="Users"/>
                    <Tab LinkComponent={Link} to="/orders" style={{fontFamily:'Times New Roman',fontWeight:600}} label="Orders"/>
                    <Tab LinkComponent={Link} to ='/allquery' style={{fontFamily:'Times New Roman',fontWeight:600}} label="Queries"/>
                </Tabs>
     </Box>
		<Box display="flex" marginLeft="auto">
		<Button  LinkComponent={Link} to="/" variant='contained' 
		sx={{margin:1,boderRadius:10}}  color="warning">Logout</Button>
		   &nbsp;&nbsp;
	   	    	</Box>
        </Toolbar>
        </AppBar>
        <div>
          &nbsp;&nbsp;
          <center>
          <Container fontFamily={'Times New Roman'} variant='h5' fontWeight={600} color={'blueviolet'}>
          {sessionStorage.getItem('username')}
          </Container>
          {//<img src={pic} height={400} width={600}/>
          }
          </center>
        </div>
        <Footer/>
    </>
  )
}

export default Dashboard;