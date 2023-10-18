import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MyAuthContext from './Component/AuthProvider/MyAuthContext';
import Registration from './Component/Routes/Registration/Registration';
import MainLayout from './Component/MainLayout/MainLayout';
import AddProducts from './Component/Routes/AddProducts/AddProducts';
import MyCart from './Component/Routes/MyCart/MyCart';
import Login from './Component/Routes/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
        path:"/addedProducts",
        element:<AddProducts></AddProducts>
      },
      {
        path:"/myCart",
        element:<MyCart></MyCart>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyAuthContext> 
      <RouterProvider router={router} />
      </MyAuthContext>
  </React.StrictMode>,
)
