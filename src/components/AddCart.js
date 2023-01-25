import React,{useContext} from 'react';
import { Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import CartContext from './store/CartContext';
const AddCart=(props)=>{
    const Cartcntx=useContext(CartContext)
    
    const EventHandler=(event)=>{
        event.preventDefault();
        Cartcntx.addItem(props.item);
    }
    return (
        <div class="position-end">
        <Button variant="info" onClick={EventHandler}>Add to Cart</Button>{' '}
        </div>
    )
}
export default AddCart;