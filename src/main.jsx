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
import NotFound from './Component/Routes/NotFound/NotFound';
import Home from './Component/Routes/Home/Home';
import PrivateRoute from './Component/Routes/PrivateRoute/PrivateRoute';
import BrandDetails from './Component/Routes/BrandDetails/BrandDetails';
import BrandProductDetails from './Component/Routes/BrandDetails/BrandProductDetails';
import Update from './Component/Routes/Update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=> fetch('/Brands.json')
      },
      {
        path:"/brands/:brandName",
        element:<BrandDetails></BrandDetails>,
        loader:()=> fetch('https://food-beverage-server-seven.vercel.app/products')
      },
      {
        path:"/brandProduct/:id",
        element:<PrivateRoute>
          <BrandProductDetails></BrandProductDetails>
        </PrivateRoute>,
        loader:()=> fetch('https://food-beverage-server-seven.vercel.app/products')
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
        path:"/addedProducts",
        element:<PrivateRoute>
          <AddProducts></AddProducts>
        </PrivateRoute>
      },
      {
        path:"/myCart",
        element:<PrivateRoute>
          <MyCart></MyCart>,
        </PrivateRoute>,
        loader:() => fetch('https://food-beverage-server-seven.vercel.app/selectedProducts')
      },
      {
        path:"/update/:id",
        element: <Update></Update>,
        loader:({params})=> fetch(`https://food-beverage-server-seven.vercel.app/products/${params.id}`)
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"*",
        element:<NotFound></NotFound>
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
