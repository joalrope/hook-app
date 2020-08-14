import React from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import { useState } from 'react';

import '../../index.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState( true );

    const handleclick = () => {
        setShow( !show );
    }

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>

            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-outline-danger mt-3"
                onClick={ handleclick }
            >
                {!show ? 'Show' : 'Hide' }
            </button>
        </div>
    )
}
