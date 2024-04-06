import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { API } from '../../service/API';
import CardProductView from './CardProductView';
import { AppBar, Box, Button, Grid,  Toolbar } from '@mui/material';

const ProductView = () => {


const [posts,setPosts] = useState([]);
const [searchParams] = useSearchParams();
const category=searchParams.get('category');

useEffect(()=>{
    const fetchData = async ()=>{
       let response =await API.getAllProducts({category:category || ''});
       if(response.isSuccess){
        setPosts(response.data);
       }
    }
    fetchData();
},[category])

  return (
    <>
    <AppBar position="sticky"
		sx={{
			background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
				}} style={{overflow:'overlay'}}>
        <Toolbar>
            <Box display="flex" marginLeft="auto">
                <Button LinkComponent={Link} to="/" variant='contained' 
		sx={{margin:1,boderRadius:10}}  color="warning">Back</Button>
            </Box>
        </Toolbar>
    </AppBar>
      {
            posts && posts.length>0 ? posts.map(post=>(
                  <Grid style={{marginLeft:'40%'}} container item xs={12} sm={10} lg={10}>
                  <Grid item lg={3} sm={4} xs={12} >
                    <Link to={`/views/${post._id}`} style={{textDecoration:'none',color:'inherit'}}>
                    <CardProductView post={post}/>
                    </Link>
                    </Grid>
                    </Grid>
            )): <Box style={{color:'#878787', margin:'30px 80px',fontSize:18}} >
                No data available...</Box>
        }
    </>
  )
}

export default ProductView;