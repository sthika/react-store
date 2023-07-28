import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import LoginForm from './LoginForm';

const Header = ({loginBtnIsActive, setLoginBtnState}) => {

  return (
    <header className='header'>
      <div className='container'>
        <div className=' header__wrapper'>
          <div className='header__logo'>
            <img src={logo} alt='LOGO' />
          </div>
          <div className='header__nav-bar'>
            <NavLink to='/' className='header__link'>
              Home
            </NavLink>
            <NavLink to='/content' className='header__link'>
              Content
            </NavLink>
            <NavLink to='/contacts' className='header__link'>
              Contacts
            </NavLink>
            <NavLink to='/about' className='header__link'>
              About
            </NavLink>
          </div>
          <button className='header__sign-up'  onClick={setLoginBtnState}>Login</button>
          <LoginForm loginBtnIsActive={loginBtnIsActive} setLoginBtnState={setLoginBtnState}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
