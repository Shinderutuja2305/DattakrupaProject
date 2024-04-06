import {  TableCell,TableRow, Typography } from '@mui/material';
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/API';


const OrderCard = ({orders}) => {

    const navigate=useNavigate();

    const removeorder = async () => {
        const response= await API.deleteOrders(orders._id);
        if(response.isSuccess){
            navigate('/dashboard');
        }
       }
  
  return (
    <>
            <TableRow>
                <TableCell><Typography>{orders.name}</Typography></TableCell>
                <TableCell><Typography>{orders.username}</Typography></TableCell>
                <TableCell><Typography>{orders.product_name}</Typography></TableCell>
                <TableCell><Typography>{new Date(orders.orderDate).toDateString()}</Typography></TableCell>
                <TableCell><Typography>{orders.qty}</Typography></TableCell>
                <TableCell><Typography>{orders.price}</Typography></TableCell>
                <TableCell><Typography>{orders.amount}</Typography></TableCell>
                <TableCell> <DeleteIcon onClick={() => removeorder()} /></TableCell>
            </TableRow>

    </>
  )
}

export default OrderCard;