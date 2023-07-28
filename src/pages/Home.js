import React from 'react';

const Home = ({allProducts}) => {
  console.log(allProducts);
  return (
    <main className='main'>
      {allProducts.map((product) => (
        <div>
          <p>{product.title}</p>
        </div>
      ))}
    </main>
  );
};

export default Home;
