import { Box, Typography,styled } from '@mui/material';
import { navData } from '../../constants/data';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';



const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '15px 130px 0 130px !important',
  overflowX: 'overlay',
  [theme.breakpoints.down('lg')]: {
      margin: '0px !important'
  }
}))



const NavBar = () => {

  const [searchParams]=useSearchParams();
  const category=searchParams.get('category');
    

  return (
    <>
    <Component style={{display:'flex',margin:'15px 130px 0px 130px',justifyContent:'space-between',overflow:'overlay'}}>
      
    {
            
            navData.map(post=>(
                <Box style={{padding:'10px 8px',textAlign:'center'}}>
                <img src={post.url} alt='img' width={160} height={110}/>
                <Link to={`/getproduct/?category=${post.text}`}  style={{textDecoration:"none",color:'inherit'}}>
                <Typography variant='h6' style={{fontFamily:'Times New Roman',fontWeight:800}}>{post.text}</Typography>
                </Link>
                </Box>
            ))
        }
    </Component>
    </>
  )
}

export default NavBar;