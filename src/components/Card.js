import React from 'react'

const Card = ({ info }) => {

    return (
            info.map((el) => (
                <div className="catalog__card">
                   
                    <div className="catalog__img">
                        <img src={el.image} alt="" />
                    </div>

                    <p className="card__title">{el.title}</p>
                    <p className="card__price">${el.price} USD</p>
                </div>
            ))
        
    )
}

export default Card