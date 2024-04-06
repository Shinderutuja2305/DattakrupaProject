import {Card,CardHeader,Typography,CardContent,Avatar, Box} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from '../../service/API';
import { useNavigate } from "react-router-dom";




 const UserCardView =({post})=>{
  const navigate=useNavigate();

  const deletePost=async()=>{
    let respone=await API.deleteUser(post._id);
    if(respone.isSuccess){
        navigate('/dashboard');
    }
}

    return(
<>

     {
      <>
   <Card sx={{ width:'40%',margin:'auto',mt:2,padding:2,boxShadow:"5px 5px 10px #ccc"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red"}} aria-label="blogs">
          </Avatar>
        }
        title={post.name}
        subheader={post.email}
      />
      
      <CardContent>
        <Box style={{float:'right'}}>
          <DeleteIcon color='error' style={{margin:'5px',padding:'5px',border:'1px solid #878787',borderRadius:'10px'}} onClick={()=>deletePost()}/>
        </Box>
      </CardContent>
     <CardContent>
        <Typography style={{fontSize:'10px'}}>{post.contact}</Typography>
        <Typography variant="body2" color="text.secondary">Address:-
         {post.address}
        </Typography>
      </CardContent>
    </Card>
    </>
      }
</>
);
}

export default UserCardView;