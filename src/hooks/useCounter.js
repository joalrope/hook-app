import { useState } from 'react';


export const useCounter = ( initialState = 0, step = 1 ) => {
    
    const [counter, setCounter] = useState(initialState);
    
    const increment = () => {
        setCounter( counter + step );
    }
    
    
    const decrement = () => {
        setCounter( counter - step );
    }


    const reset = () => {
        setCounter( initialState );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}
