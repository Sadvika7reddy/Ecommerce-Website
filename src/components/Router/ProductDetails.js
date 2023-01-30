import React from 'react'
import { Card ,Container,Col,Row,Figure} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Products from '../Products';
let productsArr=[
    {

        title:'Album 1',
        
        amount: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        id:'s1',
        quantity:1
        
        },
        
        {
        
        title: 'Album 2',
        
        amount: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        id:'s2',
        quantity:1
        },
        
        {
        
        title: 'Album 3',
        
        amount: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        id:'s3',
        quantity:1
        },
        
        {
        
        title: 'Album 4',
        
        amount: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        id:'s4',
        quantity:1
        
        }
]
const ProductDetails=(props)=>{
    const params=useParams();
    return(
        <>
        <h1>Products Details</h1>
        <div>
            {productsArr.filter(person => person.id===params.productId).map(item=> (
            <li>
                <Container>
                    <Row>
                        <Col xs={7}>
                        <Card>
                            <Card.Body>
                                <h2>{item.title}</h2>
                                <h6 style={{textAlign:'revert'}}>Amount:${item.amount}</h6> <Figure>
                             <Figure.Image
                             width={171}
                            height={180}
                            alt="171x180"
                             src={item.imageUrl}
                             />
                            </Figure>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
                
            </li>
            ))}
        </div>
        </>
        
    )
}
export default ProductDetails;