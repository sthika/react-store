import axios from 'axios';
import React, { useEffect, useState, useCallback} from 'react';
import Card from '../components/Card';
import Modal from '../components/Modal';

const Content = ({allProducts}) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState([]);
  let categories = [
    'All products',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
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

  const handleSelect = (e) => {
    setValue(e.target.innerText);
  };

  const [cardIsActive, setCardIsActive] = useState(false);
const setCardState = useCallback(() => {
  setCardIsActive(!cardIsActive);
}, [cardIsActive]);

const [cardId, setCardId] = useState(0);
console.log(cardId)
  return (
    <div className='content'>
      <div className='container'>
        <div className='contant__nav'>
          {categories.map((el) => (
            <li onClick={handleSelect}>{el}</li>
          ))}
        </div>
        <p className='content__counter'>Count: {category.length}</p>
        <div className='content__wrapper'>
          {category.map((el) => (
            <Card el={el} setCardState = {setCardState} setCardId={setCardId} />
          ))}
          <Modal allProducts={allProducts} setCardIsActive={setCardIsActive} cardIsActive = {cardIsActive} cardId={cardId}/>
        </div>
      </div>
    </div>
  );
};

export default Content;
