import React from 'react'
import { useState } from "react";
import Card from '../components/Card';



const Catalog = () => {

  const [info, setInfo] = useState([])
  const getProducts = async () => {

    let res = await fetch('https://fakestoreapi.com/products')
    let data = await res.json()
    setInfo(data)
}
getProducts()



  return (
    <section className='catalog'>
      <div className="container">
        <div className="catalog__wrapper">
          <Card info = {info}/>
        </div>
      </div>
    </section>
  )
}

export default Catalog