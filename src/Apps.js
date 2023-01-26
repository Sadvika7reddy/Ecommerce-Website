import React from 'react';
import App from './App';
import Router from './components/Router/Router';
import Empty from './components/Router/Empty';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './components/Router/RootLayout';
import Header from './components/Header';
const Apps=()=>{
    const router=createBrowserRouter([

    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {path:'/home',element:<App/>},
            {path:'/products',element:<Router/>}
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