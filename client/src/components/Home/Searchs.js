import { Box, InputBase, List, ListItem } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import SearchItem from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts as listProducts} from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const Searchs=() =>{

  const [ text, setText ] = useState();

  const { products } = useSelector(state=>state.getProducts);
  console.log(products);

  const dispatch = useDispatch();

   useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])

 const getText = (e) => {
    setText(e);
}

  return (

  <>
    <Box style={{background:"#fff",width:"38%",borderRadius:"2px",marginLeft:"10px",display:"flex"}}>
    <InputBase style={{paddingLeft:"20px",width:"100%",fontFamily:"Times New Roman"}} 
    placeholder='Search for vegetables or fruits' onChange={(e) => getText(e.target.value)}
    value={text}
    />
    <Box style={{color:"blue",padding:"5px"}}>
     <SearchItem/>
    </Box>
    {
              text && 
              <List  style={{position:'fixed',color:'#000',background: '#FFFFFF',marginTop:'36px',width:'35%'}}>
                {
                  products.filter(product => product.title.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link style={{textDecoration:'none',color:'inherit'}} to={`/current/${product._id}`} 
                      onClick={()=>setText('')}>
                      {product.title}
                      </Link>
                    </ListItem>
                  ))
                }  
              </List>
      }
    </Box>
    
</>
  )
};

export default Searchs;