import React, { useEffect, useState } from 'react'
import UserHeader from '../Home/UserHeader';
import { Link, useSearchParams } from 'react-router-dom';
import { API } from '../../service/API';
import { Box, Grid } from '@mui/material';
import GetProducts from './GetProducts';

const GetProduct = () => {

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
    <UserHeader/>
    {
            posts && posts.length>0 ? posts.map(post=>(
                  <Grid style={{marginLeft:'40%'}} container item xs={12} sm={10} lg={10}>
                  <Grid item lg={3} sm={4} xs={12} >
                    <Link to={`/current/${post._id}`} style={{textDecoration:'none',color:'inherit'}}>
                      <GetProducts post={post}/>
                    </Link>
                    </Grid>
                    </Grid>
            )): <Box style={{color:'#878787', margin:'30px 80px',fontSize:18}} >
                No data available...</Box>
        }
    </>
  )
}

export default GetProduct;