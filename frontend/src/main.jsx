import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Layout } from './layouts/Layout.jsx';
import CartProvider from './context/CartProvider.jsx';
import App from './App'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <App />
        </Layout>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
