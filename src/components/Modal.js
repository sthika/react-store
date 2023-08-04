import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Modal = ({ allProducts, setCardIsActive, cardIsActive, cardId }) => {
  const res = allProducts.filter((el) => el['id'] === cardId);
  const handleXmark = () => {
    setCardIsActive(!cardIsActive);
  };

  const id = res[0];
  const handleModalBtn = (e) => {
    id.count = count
    e.preventDefault();
    const cartProducts = JSON.parse(localStorage.getItem('products')) || [];
    cartProducts.map(el => {
      if (el.id === id.id && el.count !== id.count) {
        el.count = id.count
      } 
    });
    const cartProduct = cartProducts.find((i) => i.id === id.id);
    
    if (!cartProduct) {
      localStorage.setItem(
        'products',
        JSON.stringify([...cartProducts, res[0]])
      );
    }
    console.log(cartProducts)
    
    
  };


  const [count, setCount] = useState(1)
  const increase = () => {
      setCount(count+1)
  }
  const decrease = () => {
      setCount(count-1)
  }

  // useEffect(() => {
  //   handleCounterChange(count)
  // }, [count])
  
  return cardIsActive && res.length
    ? res.map((el) => (
     
        <div className='modal'>
          <div className='modal__wrapper'>
            <i class='fa-solid fa-xmark' onClick={handleXmark}></i>
            <div className='catalog__img'>
              <img src={el.image} alt='' />
            </div>
            <p className='card__title'>{el.title}</p>
            <p className='card__price'>$ {el.price}</p>

            <div className='modal__counter'>
              <button className='inc' onClick={increase}>
                +
              </button>
             
              <p>{count}</p>
              <button className='dec' onClick={decrease}>
                -
              </button>
            </div>

            <button onClick={handleModalBtn} className='modal__btn'>
              Add to cart
            </button>
          </div>
        </div>
      ))
    : null;
};

export default Modal;
