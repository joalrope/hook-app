import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../../index.css'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () =>  {
    //     setCounter( counter + 1);
    // }

    const increment = useCallback( (step) => {
        setCounter( c => c + step);
    }, [setCounter]);


    return (
        <div>
            <h1>useCallback Hook: { counter } </h1>
            <hr/>

            <ShowIncrement increment={ increment } />

        </div>
    )
}
