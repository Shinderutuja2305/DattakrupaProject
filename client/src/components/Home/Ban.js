import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constants/data';

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

const Ban = () => {
  return (
    <div style={{padding:'10px'}}>
   <Carousel responsive={responsive}
    >
      {
        bannerData.map(post=>(
        <center><img src={post.url} alt='img' height={230} width={600}/></center>
        ))
      }
    </Carousel>
    </div>
  )
}

export default Ban;