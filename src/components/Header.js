import React from 'react';
import {Navbar,Button,Container} from 'react-bootstrap';
import Cart from './Cart';
import {Link,Outlet} from 'react-router-dom';
const Header=(props)=>{
    return(
        <div>
            <Navbar bg='dark' expand='sm' variant='dark'>
        <Container>
          <Navbar.Brand>
           <Link to='/home'>Home</Link>
          </Navbar.Brand>
          <Navbar.Brand>Stored</Navbar.Brand>
          <Navbar.Brand>
           <Link to='/products'>About</Link>
          </Navbar.Brand>
          <Cart onShow={props.onShowCart}/>
        </Container>
      </Navbar>
      <Navbar bg='success' expand='sm' variant='light'>
        <Container>
          <h1 className='p-4'>The Generics</h1>
        </Container>
      </Navbar> 
        </div>
    )
}
export default Header;