import { Box, Button, TextareaAutosize } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { API } from '../../service/API';
import Commet from './Commet';

const initialValue = {
    name: '',
    postId: '',
    comments:'',
    date: new Date()
}

const Comments = ({product}) => {

    const [comment, setComment] = useState(initialValue);
    const [comments,setComments]=useState([]);
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        const getData = async () => {
            const response = await API.getAllComments(product._id);
            if (response.isSuccess) {
                setComments(response.data);
            }

        }
        getData();
    }, [product,toggle]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: sessionStorage.getItem('username'),
            postId: product._id,
            comments: e.target.value
        });
    }

    const addComment = async() => {
       const response= await API.newComment(comment);
        if(response.isSuccess){
        setComment(initialValue);
        }
        setToggle(prev => !prev);

    }

  return (
    <>
    <Box>
        <Box  style={{marginTop:'20px',display:'flex'}}>
            <PersonIcon fontSize='large' style={{borderRadius:'10px'}}/>
            <TextareaAutosize placeholder='Add your feedback' minRows={3} onChange={(e) => handleChange(e)} 
                    value={comment.comments}
             style={{height:'50px',width:'100%',margin: '0 20px'}}/>
            <Button variant="contained" color="primary" size="medium" 
            style={{ height: 40 }} onClick={(e) => addComment(e)}
            >Add</Button> 
        </Box>
        <Box>
        {
                    comments && comments.length > 0 && comments.map(comment => (
                        <Commet comment={comment} setToggle={setToggle} />
        
                    ))
         }
        </Box>
    </Box>
    </>

  )
}

export default Comments;