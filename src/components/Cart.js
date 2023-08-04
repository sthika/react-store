import React, { useEffect, useState, useCallback } from 'react';

import { NavLink } from 'react-router-dom';

const Cart = () => {
  const [productsToBuy, setProductsToBuy] = useState([])


useEffect(() => {
  setProductsToBuy(JSON.parse(localStorage.getItem('products')) || [])
}, [productsToBuy])


const handleDeleteOne =(el, idx) => {
  const updateArr = productsToBuy.filter((i) => i !== el)
  localStorage.setItem(
    'products',
    JSON.stringify([...updateArr])
  );
}
  const removeAll = () => {
    localStorage.clear();
  };

  return (
    <div className='cart'>
      <div className='container'>
        <h1 className='cart__header'>Корзина</h1>
        {productsToBuy.length ? (
          <div className='cart__products'>
            {productsToBuy.map((el, idx) => (
              <div className='cart__product'>
                <div className='cart__image'>
                  <img src={el.image} alt={el.title} />
                </div>
                <div className='cart__desc'>
                  <p className='cart__product-name'>{el.title}</p>
                  <p className='cart__desc'>{el.description}</p>
                  <p className='cart__price'>{el.price}</p>
                </div>
                <div className='cart__value'>
                  <p className='cart__value-count'>count: {el.count}</p>
                  <p className='cart__value-price'>{el.price}</p>
                </div>
                <div onClick={()=> {handleDeleteOne(el, idx)}} className='cart__product-delete'>
                  <i class='fa-solid fa-xmark cart__icon-delete'></i>
                </div>
              </div>
            ))}
            <button onClick={removeAll} className='cart__removeAll'>
              Remove All
            </button>
          </div>
        ) : (
          <NavLink to='/content' className='header__link'>
            <button>add product</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Cart;
