import React,{useContext} from 'react';
import { Button } from 'react-bootstrap';
import CartContext from './store/CartContext';
const Cart=(props)=>{
    let Cartcntx=useContext(CartContext);
    let quantity=0;
    Cartcntx.items.forEach(item=>{
        quantity=quantity+Number(item.quantity);
    })
    return(
        <div>
            <Button variant="info" onClick={props.onShow}>Cart</Button>{' '}
            <span style={{color: 'white'}}>{quantity}</span>
        </div>
    )
}
export default Cart;