import { AppBar, Box, Button, Grid,  Toolbar, Typography } from '@mui/material';
import React from 'react';
import user from '../../vegetables.webp';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const AboutUs=()=> {
  return (
<>
<AppBar position="sticky"
		sx={{
			background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
				}}>
            <Toolbar>   
			<img src={user} height="50" width={140} style={{margin:0}}/> &nbsp;&nbsp;
            <Typography variant="h4" style={{fontFamily:"Times New Roman"}}> Dattakrupa Vegetable Suppliers </Typography>
		<Box display="flex" marginLeft="auto">
		<Button  LinkComponent={Link} to="/" variant='contained' 
		sx={{margin:1,boderRadius:10}}  color="warning">Back</Button>
		</Box>
        </Toolbar>
        </AppBar>
		<div>
			<form>
			< Box   
                maxWidth={600}
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
                borderColor="darkblue"
                boxShadow="10px 10px 20px #ccc"
                padding={3}
                margin="auto"
                marginTop={5}
                borderRadius="5"
                >
                <Typography  padding={3} textAlign="center" variant="h4" style={{fontFamily:'Times New Roman',fontWeight:800,color:'blueviolet'}}>About Us</Typography>
                <Typography variant='h6' style={{fontFamily:'Times New Roman'}}> Welcome to our shop!..We are dedicated to bring you the fresh and organic vegetables and fruits.</Typography>
				<Typography style={{fontFamily:'Times New Roman',padding:'5px'}}>
					We source our vegetables and fruits directly from trusted growers and suppliers,ensuring freshness,organic and exceptional taste in every product we offer.
				</Typography>
				<Grid container direction="row" spacing="2" style={{padding:'10px'}}>
					<Grid item>
						<MailIcon color='action' fontSize='medium' style={{border:'1px solid #878787',borderRadius:'5px'}}/>
					</Grid>
					<Grid item>
                     <Typography style={{fontFamily:'Times New Roman',textDecoration:'underline',fontWeight:600,color:'blue'}}>
						dattakrupavegetablesuppliers@gmail.com
                    </Typography>
                    </Grid>
					</Grid>
					<Grid container direction="row" spacing="2" style={{padding:'10px'}}>
					<Grid item>
						<PhoneIcon  fontSize='medium' style={{border:'1px solid #878787',borderRadius:'5px'}}/>
					</Grid>
					<Grid item>
                     <Typography style={{fontFamily:'Times New Roman'}}>Omkar Hande:8788613893</Typography>
                    </Grid>
					</Grid>
					<Grid container direction="row" spacing="2" style={{padding:'10px'}}>
					<Grid item>
						<MyLocationIcon color='success' fontSize='medium' style={{border:'1px solid #878787',borderRadius:'5px'}}/>
					</Grid>
					<Grid item>
                     <Typography style={{fontFamily:'Times New Roman'}}>Shop:43,Ground floor,inside Chhatrapati Shivaji Maharaj Gol Mandai,</Typography>
					 <Typography style={{fontFamily:'Times New Roman'}}>PCMC Mandai Complex,Sant Tukaram Nagar,Pimpri-18</Typography>
                    </Grid>
					</Grid>
				</Box>
			</form>
		</div>
        <footer className="footer">
	</footer>
</>  
)
}

export default AboutUs;