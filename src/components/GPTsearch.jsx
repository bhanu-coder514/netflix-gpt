import React from 'react'
import GptSearchbar from './GptSearchbar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG } from '../utils/constants';

const GPTsearch = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img
                    src={BG_IMG}
                    alt='bg-image'
                    className='h-screen object-cover md:h-fit w-fit'
                />
            </div>
            <div className='md:p-0'>
                <GptSearchbar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GPTsearch;
