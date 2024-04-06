import { AppBar, Box, Button, Table, TableBody, TableCell, TableHead,  Typography} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { API } from '../../service/API';
import { Link } from 'react-router-dom';
import OrderCard from './OrderCard';


const ViewOrders = () => {

    const [order,setOrder] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
        let response=await API.getOrder();
       if(response.isSuccess){
        setOrder(response.data);
       }
    }
    fetchData();
},[])


  return (
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
    <Box>
      <center><Typography variant='h5' style={{marginTop:'20px',color:'blueviolet',fontFamily:'Times New Roman',fontWeight:600}}>All orders:</Typography></center>
      <Table style={{marginTop:'40px'}}>
           <TableHead>
                   <TableCell>Customer Name</TableCell>
                   <TableCell>User Name</TableCell>
                   <TableCell>Product Name</TableCell>
                   <TableCell>Order Date</TableCell>
                   <TableCell>Quantity</TableCell>
                   <TableCell>Price</TableCell>
                   <TableCell>Total Amount</TableCell>
                   <TableCell></TableCell>
             </TableHead>
              <TableBody>
        {
           
                    order && order.length>0 ? order.map(orders => (
                        <OrderCard orders={orders}/>
                    )):<div style={{fontFamily:"Times New Roman",fontWeight:600,marginTop:'20px',opacity:.6,marginLeft:'20px'}}>No order yet...</div>
                   
         }
       </TableBody>
      </Table>
    </Box>
    <div className='footer'></div>
    </>
  )
}

export default ViewOrders;