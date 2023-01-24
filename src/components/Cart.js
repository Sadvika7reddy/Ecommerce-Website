import React from 'react';
import { Button } from 'react-bootstrap';
const Cart=(props)=>{
    return(
        <div>
            <Button variant="info" onClick={props.onShow}>Cart</Button>{' '}
        </div>
    )
}
export default Cart;