import { Button,Navbar,Container } from 'react-bootstrap';
import React,{useState} from 'react';
import Products from './components/Products';
import AddCart from './components/AddCart';
import Header from './components/Header';
import CartItem from './components/CartItem/CartItem'
import CreateProvider from './components/store/CreateProvider';
import Empty from './components/Router/Empty';
import Router from './components/Router/Router';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
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
      <Header onShowCart={CartHandler}/>
      {create&&<CartItem onClose={HideHandler}/>}
      <Products/>   
    </CreateProvider>
  );
}  
export default App;
