import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSingInForm,setIsSingInForm] = useState(true);

  const toggleSingInForm = () => {
      setIsSingInForm(!isSingInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
          src='https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_large.jpg'
          alt='bg-image'
          />
      </div>
        <form className='w-3/12 absolute p-12 bg-black mt-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSingInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSingInForm && <input type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700'/>}
                <input type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700'/>
                <input type='password' placeholder='password' className='p-4 my-2 w-full bg-gray-700'/>
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSingInForm ? "Sign In" : "Sign Up"}</button>

                <p className='py-4 cursor-pointer' onClick={() => toggleSingInForm()}>{isSingInForm ? "New to Netflix? Sign Up Now" : "Already registered? sign In Now..."}</p>
            </form>
    </div>
  )
}

export default Login
