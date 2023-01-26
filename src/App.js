import { Button,Navbar,Container } from 'react-bootstrap';
import React,{useState} from 'react';
import Products from './components/Products';
import AddCart from './components/AddCart';
import Header from './components/Header';
import CartItem from './components/CartItem/CartItem'
import CreateProvider from './components/store/CreateProvider';
import Router from './components/Router/Router';
import Cart from './components/Cart';
function App() {
  const[create,setCreate]=useState(false)
  const CartHandler=()=>{
    setCreate(true);
  }
  const HideHandler=()=>{
    setCreate(false);
  }
  return (
    <CreateProvider>
      <Container>
      <Cart onShowCart={CartHandler}/>
      </Container>
      <Products />
      {create&&<CartItem onClose={HideHandler}/>}   
    </CreateProvider>
  );
}  
export default App;
