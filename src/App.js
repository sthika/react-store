import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useCallback } from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Content from './pages/Content';
import Contacts from './pages/Contacts';
import About from './pages/About';
import axios from 'axios';
import SignUp from './pages/SignUp';
import Cart from './components/Cart';

const App = () => {
  const [allProducts, setAllProducts] = useState([]);

  const storeApi = 'https://fakestoreapi.com/products';

  const getAllProducts = async () => {
    let { data } = await axios(storeApi);
    setAllProducts(data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const [loginBtnIsActive, setLoginBtnIsActive] = useState(false);
  const setLoginBtnState = useCallback(() => {
    setLoginBtnIsActive(!loginBtnIsActive);
  }, [loginBtnIsActive]);

  const productsToBuy = JSON.parse(localStorage.getItem('products')) || []


  return (
    <div className='app'>
      <Router>
        <Header
          loginBtnIsActive={loginBtnIsActive}
          setLoginBtnState={setLoginBtnState}
        />
        <Routes>
          <Route path='/' element={<Home allProducts={allProducts} />} />
          <Route
            path='/content'
            element={<Content allProducts={allProducts} />}
          />
          <Route
            path='/contacts'
            element={<Contacts allProducts={allProducts} />}
          />
          <Route path='/about' element={<About allProducts={allProducts} />} />
          <Route
            path='/cart'
            element={<Cart productsToBuy={productsToBuy} />}
          />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
