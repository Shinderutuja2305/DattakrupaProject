import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import {categorie} from '../constants/data.js';

const Categories=()=>{
    
    const [searchParams]=useSearchParams();
    const category=searchParams.get('category');
    

return(
    <>
    <Button variant="contained" LinkComponent={Link} to={`/addp?category=${category || ''}`}
 margin="20 px" style={{margin:"20px",width:"85%"}}>Add Product</Button>
    &nbsp;
    <Table border="1" style={{ border:"1",borderColor:"rgba(224,224,224,1)"}}>
        <TableHead>
            <TableRow>
                <TableCell>
                  <Typography style={{color:'blue'}}> All Categories</Typography>   
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {categorie.map((category)=>
                <TableRow key={category.id}>
                     <TableCell>
                        <Link to={`/add/?category=${category.type}`}  style={{textDecoration:"none"}}>
                    {category.type}
                    </Link>
                    </TableCell>
               </TableRow> )}
        </TableBody>
    </Table>
    </>
    )
};
export default Categories;