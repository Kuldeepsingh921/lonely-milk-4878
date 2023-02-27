import React from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Homepage from './Home/Homepage';
import Product from './product/Product';
import NotFoundPage from './NotFoundPage';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Cart } from '../components/Cart/Cart';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail/ProductDetail';

const AllRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AllRoutes;
