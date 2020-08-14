import React from 'react'

export const Child = ({ step, increment }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => increment( step ) }
        >
            { step }
        </button>
    )
}
