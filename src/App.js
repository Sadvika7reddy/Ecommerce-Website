import { Button,Navbar,Container } from 'react-bootstrap';
import React from 'react';
import Products from './components/Products';
import AddCart from './components/AddCart';
function App() {
  return (
    <div>
      <Navbar bg='dark' expand='sm' variant='dark'>
        <Container>
          <Navbar.Brand>Home</Navbar.Brand>
          <Navbar.Brand>Stored</Navbar.Brand>
          <Navbar.Brand>About</Navbar.Brand>
          <Button variant="info">Cart</Button>{' '}
        </Container>
      </Navbar>
      <Navbar bg='success' expand='sm' variant='light'>
        <Container>
          <h1 className='p-4'>The Generics</h1>
        </Container>
      </Navbar> 
      <Products/> 
      <AddCart/>   
    </div>
  );
} 

export default App;
