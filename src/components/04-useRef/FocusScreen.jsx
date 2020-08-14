import React, { useRef } from 'react';

import '../../index.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input 
                ref={ inputRef }
                type="text"
                className="form-control"
                placeholder= "Your Name"
            />

            <button
                className="btn btn-outline-primary mt-3"
                onClick={ handleClick } 
            >
                Focus
            </button>
        </div>
    )
}
