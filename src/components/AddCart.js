import React from 'react';
import { Button } from 'react-bootstrap';
const AddCart=()=>{
    return (
        <div class="position-relative">
            <div class="position-absolute top-0 start-50 translate-middle-x">
            <Button variant="secondary">See the Cart</Button>{' '}
            </div>    
        </div>
    )
}
export default AddCart;