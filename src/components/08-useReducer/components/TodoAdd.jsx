import React from 'react'
import { useForm } from '../../../hooks/useForm';



export const TodoAdd = ({ handleAddTodo }) => {
    
    const [ { description }, handleInputChange, reset ] = useForm({ description: '' });
    
    const handleSubmit = (e) => {
        
        e.preventDefault();

        if (description.trim().length < 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);

        reset();
    }


    return (
        <form onSubmit={ handleSubmit }>

            <input
                className="form-control mt-4"
                name="description"
                placeholder="Aprender..."
                autoComplete="off"
                value= { description }
                onChange= { handleInputChange }
                />

            <button
                type="submit"
                className="btn btn-outline-primary btn-block btn-sm mt-2"
            >
                Agregar
            </button>
        </form>
    )
}
