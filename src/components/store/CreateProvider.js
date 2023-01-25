import CartContext from './CartContext';
import {useState,useReducer} from 'react'
const defaultCartState={
    items:[],
    totalAmount:0,
}
const cartreducer=(state,action)=>{
    if(action.type==='ADD')
    {
        const updatedTotalAmount=state.totalAmount+action.item.amount*action.item.quantity;
        const existingCartIndex=state.items.findIndex(
            (item)=>item.id===action.item.id
        )
        const existingCart=state.items[existingCartIndex];
        let updatedItems;
        if(existingCart)
        {
            const updatedItem={
                ...existingCart,
                quantity:existingCart.quantity+action.item.quantity
            }
            updatedItems=[...state.items];
            updatedItems[existingCartIndex]=updatedItem;
        }
        else{ 
            updatedItems=state.items.concat(action.item);
        }
              return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    if(action.type='REMOVE')
    {
        const existingCartIndex=state.items.findIndex(
            (item)=>item.id===action.id
        )
        const existingCart=state.items[existingCartIndex];
        let updatedItems; 
        const updatedTotalAmount=state.totalAmount-existingCart.amount;
        if(existingCart.quantity===1)
        {
            updatedItems=state.items.filter(item=>item.id!=action.id);
        }
        else{
            const updatedItem={
                ...existingCart,
                quantity:existingCart.quantity-1
            }
            updatedItems=[...state.items];
            updatedItems[existingCartIndex]=updatedItem;

        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }


    }
    return defaultCartState;
}
const CreateProvider=(props)=>{
    const [cartstate,cartAction]=useReducer(cartreducer,defaultCartState)
    const addItemHandler=item=>{
       cartAction({type:'ADD',item:item}) 
    };
    const removeItemHandler=id=>{
       cartAction({type:'REMOVE',id:id}) 
    };

    const cartContext={
        items:cartstate.items,
        totalAmount:cartstate.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    };
        return<CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
};
export default CreateProvider;