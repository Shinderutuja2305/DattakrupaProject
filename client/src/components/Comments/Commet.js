
import { Box, Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from '../../service/API';


const Commet = ({comment,setToggle}) => {


    const removeComment = async () => {
      const response= await API.deleteComment(comment._id);
      if(response.isSuccess){
        setToggle(prev => !prev);
      }
     }


  return (
    <>
    <Box style={{ marginTop: '30px',background: '#F5F5F5',padding:'10px'}}>
        <Box style={{display:'flex',marginBottom: '5px'}}>
            <Typography style={{ fontWeight: 600,fontSize: '18px',marginRight:'20px'}}>{comment.name}</Typography>
            <Typography style={{fontSize:'14px',color:'#878787'}}>{new Date(comment.date).toDateString()}</Typography>
            { comment.name === sessionStorage.getItem('username') && <DeleteIcon style={{marginLeft:'auto'}} onClick={() => removeComment()} /> }
        </Box>
        <Box>
            <Typography>{comment.comments}</Typography>
        </Box>
    </Box>
    </>
  )
}

export default Commet;