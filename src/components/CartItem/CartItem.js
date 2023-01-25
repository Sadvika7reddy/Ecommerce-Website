import React, { Fragment,useContext} from 'react';
import { Button,Figure,Container,Row,Col,Card } from 'react-bootstrap';
import Model from '../UI/Model';
import classes from './CartItem.module.css'
import CartContext from '../store/CartContext';
const CartItem=(props)=>{
    const Cartcntx=useContext(CartContext);
    const totalAmount=Cartcntx.totalAmount;
    const onRemoveHandler=id=>{
        Cartcntx. removeItem(id);

    }
    const onAddHandler=item=>{
        Cartcntx.addItem({...item,quantity:1})

    }
    const CartItems=<ul >{Cartcntx.items.map(item=>
        <li >
            <div>
            <Figure>
            <Figure.Image
        width={70}
        height={70}
        alt="100x100"
        src={item.imageUrl}
      />
      </Figure>  Item:{item.title}  price:{item.amount}   Quantity:{item.quantity}
      <div>
            <button onClick={onRemoveHandler.bind(null,item.id)}>-</button>
            <button onClick={onAddHandler.bind(null,item)}>+</button>
        </div>
      </div>
        </li>)}</ul>
    return(
        <div class="justify-content-end">
            <Container>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                <Row>
                    <Col xs={7}>
                        <Card>
                            <Card.Body>
                                <h2 style={{textAlign:"center"}}>Cart</h2>
                            <div class="position-relative">
                                <div class="position-absolute top-0 start-100">
                                <Button variant="danger" onClick={props.onClose}>X</Button>{' '}
                                </div>
                            </div>    
                              
                                {CartItems}
                                <div className={classes.total}>
                                    <span>Total Amount:</span>
                                    <span >{totalAmount}</span>
                                </div>
                            <div class="position-relative">
                                <div class="position-absolute top-0 start-50 translate-middle-x">
                                    <Button variant="info">Purchase</Button>
                                </div>    
                            </div>
                       
                            </Card.Body>
      
                        </Card>
                    </Col>
                </Row>
            </Container>
           </div> 
    )
}
export default CartItem;