import React, { useState } from 'react';
import { Child } from './Child';

export const Parent= () => {

    const steps = [2,4,6,8,10];
    const [accumulated, setValor] = useState(0);

    const increment = ( step ) => {
        setValor( accumulated + step )
    }


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { accumulated } </p>

            <hr />

            {
                steps.map( n => (
                    <Child
                        key={ n }
                        step={ n }
                        increment={ increment }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
