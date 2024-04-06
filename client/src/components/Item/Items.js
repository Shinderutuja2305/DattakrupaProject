import { Box, DialogTitle, Divider, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { addElipsis } from '../../utils/common-utils';
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Items = ({ products ,title })=> {
    

  return (
    <>
    <Box>
        <Box style={{}}>
            <Typography style={{fontFamily:'Times New Roman',fontWeight:600,marginLeft:'70px',color:'blueviolet'}} variant='h5'>{title}</Typography>
        </Box>
        <Divider/>
    <Carousel 
     responsive={responsive}
     swipeable={false}
     draggable={false}
     centerMode={true}
     infinite={true}
     autoPlay={true}
     autoPlaySpeed={3000}
     keyBoardControl={true}
     containerClass="carousel-container"
     dotListClass="custom-dot-list-style"
     itemClass="carousel-item-padding-40-px"
    >
        {
            products.map(post=>(
                title=== post.categories &&
                    <Link  to={`/views/${post._id}`}  style={{padding:'10px',marginTop:'10px',textAlign:'center',textDecoration:'none'}}>
                    <img src={post.picture} alt='img' style={{width:'100%',objectfit:'cover',height:170}}/>
                    <Typography style={{marginTop:'5px',fontSize:'14px',fontFamily:'Times New Roman',fontWeight:600,color:'#212121'}}>{addElipsis(post.title,10)}</Typography>
                    <Box style={{display:'flex',marginLeft:'50px'}}>
                    <Typography style={{marginTop:'5px',fontSize:'14px',fontFamily:'Times New Roman',color:'green'}}>Cost:₹{post.cost}</Typography>
                    <Typography style={{marginTop:'5px',marginLeft:'10px',fontSize:'14px',textDecoration:'line-through',fontFamily:'Times New Roman',color:'green'}}>
                        MRP:₹{post.mrp}</Typography>
                    </Box>
                    <Typography style={{marginTop:'5px',fontSize:'14px',fontFamily:'Times New Roman',color:'#212121',opacity:.6}}>{addElipsis(post.tagline,50)}</Typography>
                    </Link>
            ))
        }

    </Carousel>
    </Box>
    </>
  )
}

export default Items;