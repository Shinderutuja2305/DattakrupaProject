import { AppBar, Box, Button, TextField, Toolbar, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import user from '../../vegetables.webp';
import { Link, useNavigate } from 'react-router-dom';
import { API } from "../../service/API";
import emailjs from '@emailjs/browser';


const signupIntialValues={
    user_name:"",
    user_email:"",
    message:""
}

const ContactUs=()=> {

    const form = useRef();

   const [signup,setSignup]=useState(signupIntialValues);
    const [error,setError]=useState('');

    const navigate=useNavigate();


    const sendQuery = async(e) =>{
        let response= await API.userQuery(signup);
        console.log(response);
        if(response.isSuccess){
         setError(" ");
         setSignup(signupIntialValues);
         navigate('/');
        }
        else{
         setError("Something went wrong! Please try again later...");
         console.log(error);
        }
     }
    
     const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6ih7z26', 'template_69tnmki', form.current, 'HfUmwwb9_u1N2LVmS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
      
    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
        console.log(signup);
    }


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
            <form ref={form} onSubmit={sendEmail}>
       < Box   
                maxWidth={400}
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
                <Typography  padding={3} textAlign="center" variant="h5" style={{fontFamily:'Times New Roman',fontWeight:800}}>Contact Us</Typography>
                <TextField  type="text" margin="normal"  name="user_name" variant="outlined" fullWidth onChange={(e)=>onInputChange(e)}
                placeholder="Your Name" required/>
                <TextField type="Email" margin="normal"  name="user_email" variant="outlined" onChange={(e)=>onInputChange(e)} fullWidth label="Email"
                placeholder="Enter your email" required/>
                <TextField type="text" margin="normal" name="message" onChange={(e)=>onInputChange(e)} variant="outlined" fullWidth 
                placeholder="Your Message" required/>
             <Button  type='submit' onClick={()=>sendQuery()}  sx={{borderRadius:3,marginTop:3}} variant='contained' color='warning'>SEND A MESSAGE</Button>
            </Box>
            </form>
        </div>
    <footer className="footer">
	</footer>
</>  
)
}

export default ContactUs;