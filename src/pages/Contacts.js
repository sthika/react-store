import React from 'react'

const Contacts = ({allProducts}) => {

  return (
    <div className="contacts">
            {allProducts.map((product) => (
        <div>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Contacts