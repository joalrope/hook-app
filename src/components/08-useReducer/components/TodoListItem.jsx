import React from 'react'
import PropTypes from 'prop-types';


// TodoListItem, todo,  handleDelete, handleToggle
export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {

    return (
       <li 
            // key={todo.id}
            className= "list-group-item"
        >
            <p 
                className={ ` ${ todo.done && 'complete'} ` }
                onClick= { () =>  handleToggle(todo.id) }
            >
                { index + 1 }. { todo.desc }
            </p>

            <button
                className="btn btn-danger btn-sm"
                onClick= { () => handleDelete(todo.id) }
            >
                Borrar
            </button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}
