import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import '../../index.css';

export const FormWithCustomHook = () => {

    const [ formvalues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''

    });

    const { name, email, password } = formvalues;

    useEffect(() => {
        console.log('email cambió')
    }, [ email ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formvalues );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Form with custom hook</h1>
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

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="............"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    );
}
