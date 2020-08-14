import { useState } from 'react';


export const useCounter = ( initialState = 0, factor = 1 ) => {
    
    const [counter, setCounter] = useState(initialState);
    
    const increment = () => {
        setCounter( counter + factor );
    }
    
    
    const decrement = () => {
        setCounter( counter - factor );
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
