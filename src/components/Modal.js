// import React from 'react';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// const Modal = ({ setCardIsActive, cardIsActive, cardId }) => {

//   const [product, setProduct] = useState({});
//   const getProducts = async () => {
//     let { data } = await axios(`https://fakestoreapi.com/products/${cardId}`);
//     setProduct(data);
//   };
//   useEffect(() => {
//     getProducts();
//   }, [cardIsActive]);


// const handleXmark = () => {

//     setCardIsActive(!cardIsActive)
// }
//   return cardIsActive ? (
//     <div className='modal'>
//         <i class="fa-solid fa-xmark" onClick={handleXmark}></i>
//       <div className='catalog__img'><img src={product.image} alt='' /></div>
//       <p className='card__title'>{product.title}</p>
//       <p className='card__price'>$ {product.price}</p>

      
//     </div>
//   ) : null;
// };

// export default Modal;


import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Modal = ({ allProducts, setCardIsActive, cardIsActive, cardId }) => {
  console.log(allProducts);

  const res = allProducts.filter((el) => el['id'] === cardId);
  const handleXmark = () => {
    setCardIsActive(!cardIsActive);
  };
  return cardIsActive && res.length
    ? res.map((el) => (
        <div className='modal'>
          <i class='fa-solid fa-xmark' onClick={handleXmark}></i>
          <div className='catalog__img'>
            <img src={el.image} alt='' />
          </div>
          <p className='card__title'>{el.title}</p>
          <p className='card__price'>$ {el.price}</p>
        </div>
      ))
    : null;
};

export default Modal;