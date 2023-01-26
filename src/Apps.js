import React from 'react';
import App from './App';
import Router from './components/Router/Router';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './components/Router/RootLayout';
import Header from './components/Header';
import Home from './components/Router/Home';
const Apps=()=>{
    const router=createBrowserRouter([

    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {path:'/home',element:<App/>},
            {path:'/products',element:<Router/>},
            {path:'/store',element:<Home/>}
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