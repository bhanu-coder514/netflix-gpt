import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const GptSearchbar = () => {

    const langKey = useSelector(store => store.config.lang);
    const currentlang = lang[langKey] || lang["en"];

    return (
        <div className='pt-[10%] flex justify-center'>
            <form
                className='bg-black w-1/2 grid grid-cols-12 bg-opacity-80 rounded-lg'
            >
                <input
                    className='p-4 m-4 col-span-9'
                    type='text' 
                    placeholder={currentlang.gptSerachPlaceholder}
                />
                <button
                    className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'
                >
                    {currentlang.search}  
                </button>
            </form>
        </div>
    )
}

export default GptSearchbar
