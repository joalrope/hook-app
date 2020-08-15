import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];


export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);
    
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''});

    const handleSubmit = (e) => {
        
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
    
        const action = {
            type: 'add',
            payload: newTodo
        }
    
        dispatch(action);

        reset();

    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <h4> Lista de TODO's</h4>
                    <hr/>
                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) =>  
                                <li 
                                    key={todo.id}
                                    className= "list-group-item"
                                >
                                    <p className="text-center"> { i + 1 }. { todo.desc }  </p>

                                    <button
                                        className="btn btn-danger btn-sm"
                                    >
                                        Borrar
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>

                <div className="col-5">
                    <h4> Agregar TODO</h4>
                    <hr/>

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


                </div>
            </div>
        </div>
    )
}
