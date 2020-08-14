import React from 'react';
import { useState, useEffect } from 'react';
import { Message } from './Message';

import '../../index.css';

export const SimpleForm = () => {

    const [formstate, setFormstate] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formstate;

    useEffect( () => {
        // console.log('Hey!!!');
    }, [ ]);
    
    useEffect( () => {
        // console.log('formState cambió!');
    }, [formstate]);

    useEffect( () => {
        // console.log('email cambió!!');
    }, [email]);

    const handleInputChange = ({ target }) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        setFormstate({
            ...formstate,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                    />
            </div>
                
            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Ejemplo@dominio.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name === '123' && <Message />}
        </>
    );
}
