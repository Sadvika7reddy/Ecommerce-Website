import React,{useContext,useState} from 'react';
import { Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import CartContext from './store/CartContext';
import axios from 'axios';
const AddCart=(props)=>{
    const Cartcntx=useContext(CartContext)
    const [name,setName]=useState([]);
    const EventHandler=(event)=>{
        event.preventDefault();
        Cartcntx.addItem(props.item);
        const obj=props.item
        const userEmail=localStorage.getItem('email');
        const user=userEmail.replace('.','q');
        const users=user.replace('@','s')
        console.log(users);
            axios.post(`https://crudcrud.com/api/a6be8c49618848a6b5302fd47926cd86/${users}`,obj)
                .then((res)=>{
                   setName(res.data);
                }) 

        
        
         
              
        
    }
    return (
        <div class="position-end">
        <Button variant="info" onClick={EventHandler}>Add to Cart</Button>{' '}
        </div>
    )
}
export default AddCart;