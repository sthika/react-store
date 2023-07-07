import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className=' header__wrapper'>
          <div className="header__wrap-left">
          <div className="header__logo">
            <img src='/images/logo.png' alt="Logo" />
          </div>
          <div className="header__nav">
            <NavLink to='/' className='header__link'>Home</NavLink>
            <NavLink to='/catalog' className='header__link'>Catalog</NavLink>
          </div>
          </div>
          <div className="header__icons">
            <div className="header__icon">
              <img src="./images/search.png" alt="" />
            </div>
            <div className="header__icon">
              <img src="./images/search.png" alt="" />
            </div>
            <div className="header__icon">
              <img src="./images/search.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header