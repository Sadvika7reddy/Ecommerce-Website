import React,{Fragment} from 'react';
import { Card, Container,Row,Col,Figure, Button } from 'react-bootstrap';
let productsArr=[
    {

        title:'Album 1',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Album 2',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        
        },
        
        {
        
        title: 'Album 3',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        
        },
        
        {
        
        title: 'Album 4',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
]
const Products=()=>{
    let List=productsArr.map(item=><li >
        <Container>
                <Row>
                    <Col xs={7}>
                        <Card>
                            <Card.Body><h2>{item.title}</h2>
    <h6 style={{textAlign:'revert'}}>${item.price}</h6> <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={item.imageUrl}
      />
      </Figure>
      <div class="position-end">
      <Button variant="info">Add to Cart</Button>{' '}
      </div>
      </Card.Body>
      
                        </Card>
                    </Col>
                </Row>
            </Container>
    </li>)
        return(
       <Fragment> 
            <h2 style={{textAlign:"center"}}>Music</h2>   
            <div>{List}</div>
        </Fragment>
    )
}
export default Products;