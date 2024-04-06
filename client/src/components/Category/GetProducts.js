import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { addElipsis } from '../../utils/common-utils';

const GetProducts = ({post}) => {
  return (
    <>
    <Card sx={{ maxWidth:'400%',padding:'10px',marginTop:'10px'}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={post.picture}
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{padding:'0 5px 5px 5px',fontSize:'18px',fontWeight:600,fontFamily:'Times New Roman'}}>
          {addElipsis(post.title,20)}
        </Typography>
        <Box style={{display:'flex',color:'green'}}>
        <Typography style={{padding:'0 5px 5px 5px',fontSize:'12px',textDecoration:'line-through',fontFamily:'Times New Roman'}}>MRP:₹{post.mrp}</Typography>
        <Typography style={{padding:'0 5px 5px 5px',fontSize:'12px',fontFamily:'Times New Roman'}}>Cost:₹{post.cost}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" style={{padding:'0 5px 5px 5px',fontSize:'16px',fontFamily:'Times New Roman',color:'#121212',opacity:.6}}>
          {addElipsis(post.description,100)}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </>
  )
}

export default GetProducts;