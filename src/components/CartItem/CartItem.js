import React, { Fragment} from 'react';
import { Button,Figure,Container,Row,Col,Card } from 'react-bootstrap';
import Model from '../UI/Model';
import classes from './CartItem.module.css'
let cartElemnts=[
    {

        title:'Album 1',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity:1
        
        },
        
        {
        
        title: 'Album 2',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity:2

        
        }
    ]
const CartItem=(props)=>{
    const CartItems=<ul >{cartElemnts.map(item=>
        <li >
            <div>
            <Figure>
            <Figure.Image
        width={70}
        height={70}
        alt="100x100"
        src={item.imageUrl}
      />
      </Figure>  Item:{item.title}  price:{item.price}   Quantity:{item.quantity} <Button variant='warning'>cancel</Button>
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
                                    <span >$123</span>
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