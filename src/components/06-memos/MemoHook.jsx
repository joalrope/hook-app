import React, { useState, useMemo } from 'react';

import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

import '../../index.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h1>MemoHook (useMemo)</h1>
             <h2> Counter: <small> { counter } </small> </h2>
            <hr/>

            <p> { memoHeavyProcess } </p>

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick= {() => {
                    setShow(!show);
                  }}
            >
                { show ? 'Show' : 'Hide' }
            </button>

        </div>
    )
}
