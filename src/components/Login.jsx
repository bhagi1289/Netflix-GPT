import React, { useRef, useState } from 'react'
import Header from './Header'
import bgImage from '../assets/netflix_background.jpg';
import { checkValidData }from '../utils/validate';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const toggleSignInForm = () =>{ 
    setIsSignInForm(!isSignInForm)
  }

  const handleSubmitForm = () => {
    // Valudate form data
    const message = checkValidData(email.current.value, password.current.value, name.current.value, isSignInForm);
    setErrorMessage(message);

    //  Sign In / Sign Up

  }

  return (
    <div>
      <Header />
      <div
        className='bg-cover bg-no-repeat bg-center min-h-screen h-screen'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <form onClick={e => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up"}</h1>
          {!isSignInForm && <>
          <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' /></>}
          <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
          <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleSubmitForm}>{isSignInForm ? "Sign In": "Sign Up"}</button>

          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? 
                          "New to Netflix? Sign Up Now": 
                          "Already registered? Sing In Now"}</p>
        </form>
      </div>


    </div>
  )
}

export default Login