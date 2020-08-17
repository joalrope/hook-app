import React, { useReducer, useEffect } from 'react';

import { TodoList } from './components/TodoList';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {
    
    const [ todos, dispatch ] = useReducer(todoReducer, [], init );
    
    const [ { description }, handleInputChange, reset ] = useForm({ description: '' });
   
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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
    
        const action = {
            type: 'add',
            payload: newTodo
        }
    
        dispatch(action);

        reset();

    }

    const handleDelete = (todoId) => {

        dispatch({
            type: 'delete',
            payload: todoId
        });
    }
    
    const handleToggle = (todoId) => {
    
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }


    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <h4> Lista de TODO's</h4>
                    <hr/>
                    {/* TodoList, todos, handleDelete, handleToggle */}
                    <TodoList
                        todos = { todos }
                        handleDelete = { handleDelete }
                        handleToggle = { handleToggle }
                    />
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
