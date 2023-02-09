import React, { Fragment,useContext,useEffect,useState} from 'react';
import { Button,Figure,Container,Row,Col,Card } from 'react-bootstrap';
import Model from '../UI/Model';
import classes from './CartItem.module.css'
import CartContext from '../store/CartContext';
import axios from 'axios';
const CartItem=(props)=>{
    const Cartcntx=useContext(CartContext);
    const[value,setValue]=useState([])
    let totalAmount=0;
    const userEmail=localStorage.getItem('email');
        const user=userEmail.replace('.','q');
        const users=user.replace('@','s')
    value.forEach(item=>{
          totalAmount=totalAmount+Number(item.amount)*Number(item.quantity);
    })
   
    const onRemoveHandler= async (id)=>{
       
        let res=await axios.delete(`https://crudcrud.com/api/7f3dc144d9f444408cf9c034830d8705/${users}/${id}`)
            
               value=res.data.filter(item=>item._id!==id);
               setValue(value)
             
 
    }
    
    const onAddHandler=(id,quantity,title,amount,imageUrl)=>{
       
      axios.put(`https://crudcrud.com/api/7f3dc144d9f444408cf9c034830d8705/${users}/${id}`,{quantity:quantity+1,
    title:title,
    amount:amount,
    imageUrl:imageUrl
})
      .then((res)=>{
        
      })
      
    }
    
        useEffect(()=>{
            axios.get(`https://crudcrud.com/api/7f3dc144d9f444408cf9c034830d8705/${users}`)
            .then((res)=>{
                setValue(res.data);
            })

        },[])
        
        
        
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
                            <ul >{value.map(item=>
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
                                <button onClick={()=>onRemoveHandler(item._id)}>Remove</button>
                                <button onClick={()=>onAddHandler(item._id,item.quantity,item.title,item.amount,item.imageUrl)}>+</button>
                                
                            </div>
                        </div>
                            </li>)}</ul>
                           
                                
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