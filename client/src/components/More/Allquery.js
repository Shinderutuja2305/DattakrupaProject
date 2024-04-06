import React from "react";
import { useEffect, useState } from "react";
import { API } from "../../service/API";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Grid } from "@mui/material";
import QueryView from "./QueryView";


const Allquery=()=>{

const [posts,setPosts] = useState([]);

useEffect(()=>{
    const fetchData = async ()=>{
        let response=await API.getAllquery();
       if(response.isSuccess){
        setPosts(response.data);
       }
    }
    fetchData();
},[]) 

    return(
    <>
       <AppBar position="sticky" sx={{background:"linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"}}>
       <Box display="flex" marginLeft="auto">
       <Button LinkComponent={Link} to="/dashboard"
            variant="contained"
            sx={{margin:1,borderRadius:10}}
            color="warning">
                BACK
            </Button>
        </Box>
    </AppBar>

{           
            posts && posts.length>0 ? posts.map(post=>(
                <Grid style={{margin:'30px'}}  item xs={12} sm={10} lg={10}>
               <QueryView post={post}/>
               </Grid>
            )): <Box style={{color:'#878787', margin:'30px 80px',fontSize:18}} >
                No data available...</Box>
        }

    
    </>
);
}

export default Allquery;