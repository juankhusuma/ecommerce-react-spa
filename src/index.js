import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Product from './pages/Product';
import CartProvider from './CartProvider';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contacts from './pages/Contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/product/:id",
    element: <Product />
  },
  {
    path: "/carts",
    element: <Cart />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/contacts",
    element: <Contacts />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);


