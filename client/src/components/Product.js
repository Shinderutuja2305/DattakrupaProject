import { AppBar, Box, Button, Grid } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import img from '../images.png';
import Categories from './Categories';
import CardProducts from './CardView/CardProducts';

function Product() {
  return (
    <>
    
<div>
   <AppBar position="sticky" sx={{background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
}}>
    <Box display="flex" marginRight={'auto'}>
    </Box>
    <Box display="flex" marginLeft="auto">
            <Button LinkComponent={Link} to="/dashboard"
            variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning">
                BACK
     </Button>
    </Box>
   </AppBar>
    </div>
<div>
    <div>
     &nbsp;&nbsp;
        <img src={img} width="500" height="180" style={{padding:'5px'}}/>
        &nbsp;&nbsp;
     </div>
     <Grid container>
    <Grid item lg={2} sm={2} xs={12}>
        <Categories/>
    </Grid>
    <Grid container item xs={12} sm={10} lg={10}>
        <CardProducts/>
    </Grid>
    </Grid>

</div>
<footer className="footer">
</footer>
    </>
  )
}

export default Product;