import React from 'react';
import App from './App';
import Router from './components/Router/Router';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './components/Router/RootLayout';
import Home from './components/Router/Home';
import Contact from './components/Router/Contact';
import ProductDetails from './components/Router/ProductDetails';

const Apps=()=>{
    async function EventItemhandler(expenceData){
        const response=await fetch('https://add-movies-c908f-default-rtdb.firebaseio.com/details.json',{
            method:'POST',
            body:JSON.stringify(expenceData),
            headers:{
                'content-type':'application/json'
            }
        }
        )

    }
    const router=createBrowserRouter([

    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {path:'/home',element:<App/>},
            {path:'/products',element:<Router/>},
            {path:'/store',element:<Home/>},
            {path:'/contact',element:<Contact onAddDetails={EventItemhandler}/>},
            {path:'/home/:productId',element:<ProductDetails/>}
        ],
    },    
      ])
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}
export default Apps;