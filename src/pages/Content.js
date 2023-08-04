import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';

const Content = ({ allProducts }) => {
  const [value, setValue] = useState('');

  const [category, setCategory] = useState([]);
  let categories = [
    { endpoint: '', ru: 'Все продукты' },
    { endpoint: 'electronics', ru: 'Электроника' },
    { endpoint: 'jewelery', ru: 'Украшения' },
    { endpoint: "men's clothing", ru: 'Мужская одежда' },
    { endpoint: "women's clothing", ru: 'Женская одежда' },
  ];

  useEffect(() => {
    const getCategories = async () => {
      let { data } = await axios(
        `https://fakestoreapi.com/products/${
          !value ? '' : `/category/${value}`
        }`
      );
      setCategory(data);
    };
    getCategories();
  }, [value]);

  const handleSelect = (endp) => {
    setValue(endp);
  };

  const [cardIsActive, setCardIsActive] = useState(false);

  const setCardState = useCallback(() => {
    setCardIsActive(!cardIsActive);
  }, [cardIsActive]);

  const [cardId, setCardId] = useState(0);

  return (
    <div className='content'>
      <div className='container'>
        <div className='contant__nav'>
          {categories.map((el) => (
            <li onClick={() => handleSelect(el.endpoint)}>{el.ru}</li>
          ))}
        </div>
        <p className='content__counter'>Count: {category.length}</p>
        <div className='content__wrapper'>
          {category.map((el) => (
            <Card el={el} setCardState={setCardState} setCardId={setCardId} />
          ))}
          <Modal
            allProducts={allProducts}
            setCardIsActive={setCardIsActive}
            cardIsActive={cardIsActive}
            cardId={cardId}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
