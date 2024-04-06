import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Grid,styled } from '@mui/material';
import { addElipsis } from '../../utils/common-utils';

const Component = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
      margin: '0px'
  }
}))


const QueryView=({post})=> {

  return (
    <Grid item lg={10} sm={4} xs={12}>
    <Box style={{padding:'10px',margin:'10px',display:'flex'}}>
    <Component sx={{ width:'40%',marginLeft:'400px',mt:2,boxShadow:"5px 5px 10px #ccc"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'Times New Roman',fontWeight:600,color:'blueviolet'}}>
            {post.user_name}
        </Typography>
        <Typography component="div" style={{fontFamily:'Times New Roman',color:'blue',textDecoration:'underline'}}>
            {addElipsis(post.user_email,27)}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontFamily:'Times New Roman',padding:'10px 0px',fontWeight:600}}>
          {post.message}
        </Typography>
      </CardContent>
    </Component>
    </Box>
    </Grid>
  );
}
export default QueryView;