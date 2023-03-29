import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import CompanyPage from './containers/CompanyPage';
import CreateProductPage from './containers/CreateProductPage';
import ProductView from './containers/ProductView';
import CartPage from './containers/CartPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/customer" element={<App />} />
      <Route path="/customer/cart" element={<CartPage />} />
      <Route path="/customer/products" element={<ProductView />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/company/create-product" element={<CreateProductPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
  <ToastContainer autoClose={2000} />
  </React.StrictMode>
);
