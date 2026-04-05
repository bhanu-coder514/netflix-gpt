import React, { useEffect } from 'react'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <Browse />,
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or signed up
        const {uid,email,displayName,photoURL} = user;
        dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));

      } else {
        // User is signed out
        dispatch(removeuser());
      }
    });

  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>

  )
}

export default Body
