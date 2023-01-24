import { Button,Navbar,Container } from 'react-bootstrap';
import React,{useState} from 'react';
import Products from './components/Products';
import AddCart from './components/AddCart';
import Header from './components/Header';
import CartItem from './components/CartItem/CartItem'
function App() {
  const[create,setCreate]=useState(false)
  const CartHandler=()=>{
    setCreate(true);
  }
  const HideHandler=()=>{
    setCreate(false);
  }
  return (
    <div>
      <Header onShowCart={CartHandler}/>
      {create&&<CartItem onClose={HideHandler}/>}
      <Products/> 
      <AddCart/>   
    </div>
  );
} 

export default App;
