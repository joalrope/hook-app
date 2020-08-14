import React,  { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } =  useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote } = !!data && data[0];

    const parag = useRef();
    
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {

        setBoxSize(parag.current.getBoundingClientRect());
        
    }, [ quote ])

    return (
        <div>
            <h3>LayoutEffect</h3>
            <hr/>
                
            <blockquote className="blockquote text-right">
                <p
                    className="mb-0"
                    ref={ parag }
                >
                    { quote }
                </p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ increment } 
            >
                    Next Quote
            </button>

        </div>
    );
}