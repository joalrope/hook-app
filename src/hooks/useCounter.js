import { useState } from 'react';


export const useCounter = ( initialState = 0 ) => {
    
    const [state, setState] = useState(initialState)
    
    const increment = ( factor ) => {
        setState( state + factor );
    }
    
    
    const decrement = ( factor ) => {
        setState( state - factor );
    }


    const reset = () => {
        setState( initialState );
    }

    return {
        state,
        increment,
        decrement,
        reset
    };

}
