import React, { useState } from 'react'
import Header from './Header'
import bgImage from '../assets/netflix_background.jpg';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () =>{ 
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div
        className='bg-cover bg-no-repeat bg-center min-h-screen h-screen'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
          {!isSignInForm && <>
          <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' /></>}
          <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In": "Sign Up"}</button>

          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? 
                          "New to Netflix? Sign Up Now": 
                          "Already registered? Sing In Now"}</p>
        </form>
      </div>


    </div>
  )
}

export default Login