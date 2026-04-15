import React from 'react'
import GptSearchbar from './GptSearchbar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG } from '../utils/constants';

const GPTsearch = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img
                    src={BG_IMG}
                    alt='bg-image'
                />
            </div>
            <GptSearchbar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GPTsearch;
