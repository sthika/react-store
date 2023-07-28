import React from 'react'

const SignUp = () => {
  return (
    <div className='sign-up'>
    <h2 className='sign-up__title'>Sign Up</h2>

    <form id='sign-up-form' className='login__form'>
      <input
        type='text'
        name='username'
        id='username-field'
        class='sign-up-field'
        placeholder='Username'
      />
      <input
        type='password'
        name='password'
        id='password-field'
        class='sign-up-field'
        placeholder='Password'
      />
            <input
        type='mail'
        name='email'
        id='email-field'
        class='sign-up-field'
        placeholder='Email'
      />
      <input
        className='sign-up__btn'
        type='submit'
        value='Sign Up'
        id='sign-up-submit'
      />
    </form>

  </div>
  )
}

export default SignUp