import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const showGptSearch = useSelector((store) => store.GptSearch.showGptSearch)


    const handlesignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in or signed up
                const { uid, email, displayName, photoURL } = user;
                dispatch(adduser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeuser());
                navigate("/");
            }
        });

        // unsubscribe when components unmounts
        return () => unsubscribe();

    }, []);

    const handlegptsearch = () => {
        // Toggle gpt search
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        console.log(e.target.value);
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img
                className='w-44'
                src={LOGO}
                alt='logo'
            />
            {user &&
                <div className='flex p-2 gap-2 items-center'>
                    {showGptSearch && <select
                        className='py-2 px-4 m-2 text-white bg-gray-500 bg-opacity-50 rounded-sm text-lg'
                        onChange={handleLanguageChange}
                        >
                        {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} vlaue={lang.identifier}>{lang.name}</option>)}
                    </select>}
                    <button
                        className='py-2 px-4 m-2 text-white bg-gray-500 bg-opacity-50 rounded-sm text-lg'
                        onClick={handlegptsearch}
                    >{showGptSearch ? "Home" : "GPT Search"}</button>
                    <img className='w-12 h-12' src={user?.photoURL} alt='usericon' />
                    <button onClick={handlesignout} className='font-bold text-white'>(sign Out)</button>
                </div>}
        </div>
    )
}

export default Header;