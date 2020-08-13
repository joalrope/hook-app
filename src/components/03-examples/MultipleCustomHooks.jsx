import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import '../../index.css'

export const MultipleCustomHooks = () => {

    const state =  useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

    console.log(state);

    return (
        <div>
            <h3>Custom Hooks !!!!</h3>
            
        </div>
    )
}