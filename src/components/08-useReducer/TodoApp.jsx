import React, { useReducer } from 'react';

import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

export const TodoApp = () => {


    const [ state ] = useReducer(reducer, initialState);


    return (
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>
            </ul>
        </div>
    )
}
