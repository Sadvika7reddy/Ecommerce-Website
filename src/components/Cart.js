import React,{useContext, useEffect,useState} from 'react';
import { Button } from 'react-bootstrap';
import CartContext from './store/CartContext';
import axios from 'axios';
const Cart=(props)=>{
    const [val,setVal]=useState([])
    let Cartcntx=useContext(CartContext);
    let quantity=0;
    Cartcntx.items.forEach(item=>{
        quantity=quantity+Number(item.quantity)
    })
    val.forEach(item=>{
        quantity=quantity+Number(item.quantity);
    })
    const userEmail=localStorage.getItem('email');
        const user=userEmail.replace('.','q');
        const users=user.replace('@','s')
    useEffect(()=>{
        axios.get(`https://crudcrud.com/api/a6be8c49618848a6b5302fd47926cd86/${users}`)
        .then((res)=>{
            setVal(res.data);
        })

    },[])
    
    return(
        <div>
            <Button variant="info" onClick={props.onShowCart}>Cart</Button>{' '}
            <span style={{color: 'Black'}}>{quantity}</span>
        </div>
    )
}
export default Cart;