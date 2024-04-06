import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

const GroupButton = ({counter,setCounter}) => {



  const handleIncrement = () => {
    setCounter(counter => counter + 1 );
};

const handleDecrement = () => {
    setCounter(counter => counter - 1 );
};
  return (
    <>
    <ButtonGroup style={{   marginTop:'30px'}}>
        <Button style={{borderRadius:'60'}} onClick={() => handleDecrement()} disabled={counter === 1}>-</Button>
        <Button disabled>{counter}</Button>
        <Button style={{borderRadius:'60'}} onClick={() => handleIncrement()}>+</Button>
    </ButtonGroup>
    </>
  )
}

export default GroupButton;