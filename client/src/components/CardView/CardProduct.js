import { Box, Typography } from "@mui/material";
import { addElipsis } from "../../utils/common-utils";



const CardProduct=({post})=>{
    return (
        <Box style={{border:'1px solid #d3cede',borderRadius:'10px',margin:'10px',height:'350px',display:'flex',alignItems:"center",flexDirection:'column'}}>
            <img style={{width:'100%',objectfit:'cover',height:170,borderRadius:'10px 10px 0 0'}} src={post.picture}/>
            <Typography style={{padding:'0 5px 5px 5px',fontSize:'11px',fontFamily:'Times New Roman',opacity:.9,fontWeight:600,color:'#121212'}}>
                {post.categories}</Typography>
            <Typography style={{padding:'0 5px 5px 5px',fontSize:'18px',fontWeight:600,fontFamily:'Times New Roman'}}>{addElipsis(post.title,20)}</Typography>
            <Box style={{display:'flex',color:'green'}}>
            <Typography style={{padding:'0 5px 5px 5px',fontSize:'12px',textDecoration:'line-through',fontFamily:'Times New Roman'}}>MRP:₹{post.mrp}</Typography>
            <Typography style={{padding:'0 5px 5px 5px',fontSize:'12px',fontFamily:'Times New Roman'}}>Cost:₹{post.cost}</Typography>
            </Box>
            <Typography style={{padding:'0 5px 5px 5px',fontSize:'16px',fontFamily:'Times New Roman',color:'#121212',opacity:.6}}>{addElipsis(post.description,100)}</Typography>
        </Box>
    );
}


export default CardProduct;