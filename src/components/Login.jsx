import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userSlice';
import { PHOTOurl } from '../utils/constants';

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSingInForm = () => {
    setIsSingInForm(!isSingInForm);
  }


  const handleButtonClick = () => {
    //validate the form data

    const message = checkValidData(email.current.value,
      password.current.value,
      isSingInForm ? "" : name.current.value);
    setErrorMessage(message);
    if (message) return;

    // sign In / signUp
    if (!isSingInForm) {
      // sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: PHOTOurl
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = auth.currentUser; // updated user
            dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }
    else {
      // sign In

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }


  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_large.jpg'
          alt='bg-image'
        />
      </div>
      <form
        className='w-3/12 absolute p-12 bg-black mt-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className='font-bold text-3xl py-4'>{isSingInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSingInForm &&
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-4 my-2 w-full bg-gray-700'
          />}
        <input
          ref={email}
          type='text'
          placeholder='Email Address'
          className='p-4 my-2 w-full bg-gray-700'
        />
        <input
          ref={password}
          type='password'
          placeholder='password'
          className='p-4 my-2 w-full bg-gray-700'
        />
        <p className='text-red-500 font-bold text-lg p-1'>{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >{isSingInForm ? "Sign In" : "Sign Up"}</button>

        <p className='py-4 cursor-pointer' onClick={toggleSingInForm}>{isSingInForm ? "New to Netflix? Sign Up Now" : "Already registered? sign In Now..."}</p>
      </form>
    </div>
  )
}

export default Login
