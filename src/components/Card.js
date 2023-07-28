import React from 'react'

const Card = ({el, setCardState, setCardId}) => {
    const handleCardBtn = () => {
        setCardState()
        setCardId(el.id)
    }

    return (

                <div className="catalog__card">
                    
                   
                    <div className="catalog__img">
                        <img src={el.image} alt="" />
                    </div>

                    <p className="card__title">{el.title}</p>
                    <p className="card__price">${el.price} USD</p>
                    <button className='card__btn' onClick={handleCardBtn}>Details</button>
                </div>
        
    )
}

export default Card