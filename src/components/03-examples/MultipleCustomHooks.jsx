import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../../index.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } =  useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h3>BreakingBad  Quotes</h3>
            <hr/>

            {
                loading
                ? 
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0"> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>
                    )
            }

            <button 
                className="btn btn-primary"
                onClick={ increment } 
            >
                    Next Quote { counter + 1 }
            </button>

        </div>
    );
}