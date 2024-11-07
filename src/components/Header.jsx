import React from 'react'
import logo from '../assets/Netflix-Logo.wine.svg';
import userIcon from '../assets/userIcon.jpg'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignout = ()=>{
    signOut(auth)
    .then(()=>{
      dispatch(removeUser());
      navigate("/");
    })
    .catch(()=>{
      navigate("/error")
    });
  }
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img
            className='w-44'
            src={logo}
            alt='Logo'
         />

        {user && 
          <div className='flex p-2'>
          <img
            className='w-12 h-12 mt-8'
            alt='userIcon'
            src={userIcon}
           />

           <button onClick={handleSignout} className='font-bold text-white'>(Sign Out)</button>
        </div>
        }
    </div>
  )
}

export default Header