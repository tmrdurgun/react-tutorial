import React from 'react';

export const TodoItem = (props) => {
    return (
        <>
            <li className="todo-item">{props.todo.title}</li>
        </>
    )
}