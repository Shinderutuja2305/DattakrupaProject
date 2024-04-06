import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { banData} from '../../constants/data';
import { Typography } from '@mui/material';


const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



const Banner = () => {
  return (<>
    <Carousel responsive={responsive} 
    swipeable={false}
    draggable={false}
    autoPlaySpeed={2000}
    keyBoardControl={true}
    slidesToSlide={1}
    infinite={true}
    autoPlay={true}
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
        {
            
            banData.map(post=>(
              <Typography variant="h5" style={{textAlign:'center',backgroundColor:'blueviolet',fontFamily:'Times New Roman',fontWeight:800}}>{post.url}</Typography>
            ))
        }
    </Carousel>
  
    </>
  )
}
export default Banner;