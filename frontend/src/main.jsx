import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import MainLayout from './layouts/MainLayout.jsx'
import CartProvider from './context/CartProvider.jsx';
import App from './App'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <MainLayout>
          <App />
        </MainLayout>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
