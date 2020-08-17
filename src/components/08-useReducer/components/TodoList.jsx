import React from 'react'
import PropTypes from 'prop-types';

import { TodoListItem } from '../components/TodoListItem'


export const TodoList = ({ todos, handleDelete, handleToggle }) => {

    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todo, i) =>
                    <TodoListItem 
                        key= { todo.id }
                        todo = { todo }
                        i = { i }
                        handleDelete = { handleDelete }
                        handleToggle = { handleToggle }
                    />
                )
            }
        </ul>
    )
}

TodoListItem.propTypes = {
    todos: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}
