import React from 'react'

const About = ({allProducts}) => {
  return (
    <div className="about">
            {allProducts.map((product) => (
        <div>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default About