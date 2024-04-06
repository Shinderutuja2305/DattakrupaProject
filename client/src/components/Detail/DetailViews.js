import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction.js';
import {  Box ,Grid,styled} from '@mui/material';
import  ActionItem from './ActionItem';
import ProductsDetails from './ProductsDetails.js';
import Comments from '../Comments/Comments';
import UserHeader from '../Home/UserHeader.js';



const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      margin: 0
  }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
`;

const DetailViews = () => {

  const { id } = useParams();


  const {product } = useSelector(state => state.getProductDetails);

  const dispatch = useDispatch();
  
  useEffect(() => {
          dispatch(getProductDetails(id));
  }, [dispatch]);

  return (
    <>
    <UserHeader/>
    <Box style={{marginTop:'10px',background:'#F2F2F2'}}>
      {
               product && Object.keys(product).length && 
               <Container container>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItem product={product} />
                </Grid>
                <RightContainer item lg={8} md={8} sm={8} xs={12}>
                  <ProductsDetails product={product}/>

                </RightContainer>
               </Container>
      }
      
    </Box>
    <Box style={{margin:'20px 100px'}}>
        <Comments product={product}/>
    </Box>
    </>
  )
};
    export default DetailViews;

      