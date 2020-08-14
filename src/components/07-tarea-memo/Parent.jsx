import React, { useState, useCallback } from 'react';
import { Child } from './Child';

export const Parent= () => {

    const steps = [2,4,6,8,10];
    const [accumulated, setValor] = useState(0);

    /* const increment = useCallback( ( step ) => {
        setValor( accumulated + step );
    }, ); */

    const increment = useCallback( (step) => {
        setValor( v => v + step );
    }, [setValor]);
    

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
