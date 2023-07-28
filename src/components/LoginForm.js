import React from 'react';
import { NavLink } from 'react-router-dom';


const LoginForm = ({ loginBtnIsActive, setLoginBtnState}) => {

  return loginBtnIsActive ? (
    <div className='login'>
      <h2 className='login__title'>Login</h2>

      <form id='login-form' className='login__form'>
        <input
          type='text'
          name='username'
          id='username-field'
          class='login-form-field'
          placeholder='Username'
        />
        <input
          type='password'
          name='password'
          id='password-field'
          class='login-form-field'
          placeholder='Password'
        />
        <input
          className='login__btn'
          type='submit'
          value='Login'
          id='login-form-submit'
        />
      </form>
      <p>
        Don't have an account yet?{' '}
        <NavLink to='/signup' className='login__link' onClick={setLoginBtnState}>
          Sign Up
        </NavLink>
      </p>
    </div>
  ) : null;
};

export default LoginForm;
