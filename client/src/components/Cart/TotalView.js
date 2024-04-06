import { Box, Typography,styled } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const TotalView = ({cartItems}) => {

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
}, [cartItems]);


  const totalAmount = () => {
    let price = 0, discount = 0;
    cartItems.map(item => {
        price += item.mrp
        discount += (item.mrp - item.cost) 
    })
    setPrice(price);
    setDiscount(discount);
}
  return (
<>
<Box>
  <Box style={{ padding:'16px 24px',background:'#fff',borderBottom: '1px solid #f0f0f0'}}>
    <Typography style={{ color: '#878787',fontFamily:'Times New Roman',fontWeight:600}}>PRICE DETAILS</Typography>
  </Box>
  <Container>
          <Typography>Price ({cartItems?.length} item)
              <Box component="span" style={{ float:'right'}}>₹{price}</Box>
          </Typography>
          <Typography>Discount
             <Box component="span" style={{ float:'right'}}>₹{discount}</Box>
          </Typography>
          <Typography>Delivery Charges
             <Box component="span" style={{ float:'right'}}>₹10</Box>
          </Typography>
          <Typography style={{fontSize: '18px',fontWeight: 600,borderTop:'2px dashed #e0e0e0',
          padding:'20px 0',borderBottom:'2px dashed #e0e0e0',fontFamily:'Times New Roman'}}>Total Amount
            <Box component="span" style={{ float:'right'}}>₹{price - discount + 10}</Box>
           </Typography> 
           <Typography style={{fontSize:'16px',fontWeight:600,color:'green',fontFamily:'Times New Roman'}}>You will save ₹{discount} on this order</Typography>
  </Container>
</Box>
</>    
)
}

export default TotalView;