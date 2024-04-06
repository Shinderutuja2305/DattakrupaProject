import {  Box, Typography } from '@mui/material'
import React from 'react';
import empty from '../../Empty.webp';

const EmptyCart = () => {

  return (
<>
<Box style={{width:'80%',height:'65vh',margin:'40px 140px'}}>
    <Box style={{ textAlign:'center',paddingTop:'70px'}}>
        <img src={empty} alt='empty' style={{ width: '15%'}}/>
        <Typography>Your cart is empty!</Typography>
        <Typography component="span">Add items to it now.</Typography>
    </Box>
</Box>
</>  
)
}

export default EmptyCart;