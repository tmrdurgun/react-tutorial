import { useState, useReducer } from 'react';

const initialTodos = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
];

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'CHECK_TODO':
      return todos.map((item) => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed };
        }
        return item;

      });
    case 'ADD_TODO':
      return [...todos, {
        "userId": 1,
        "id": todos.length + 1,
        "title": action.newTodo,
        "completed": false
      }]
    default:
      return todos;
  }
}

const Todos = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleAddTodo = () => dispatch({ type: 'ADD_TODO', newTodo });

  const handleCheckTodo = (todoItem) => {
    dispatch({
      type: 'CHECK_TODO',
      id: todoItem.id
    })
  }

  return (
    <div>
      <div className="add-todo-container flex">
        <input type="text" value={newTodo}
          placeholder='What else to do?'
          onChange={(e) => setNewTodo(e.target.value)}
        /> <button onClick={() => handleAddTodo()}>Add +</button>
      </div>

      <ul>
        {todos.map((todoItem, i) => (
          <li key={`todo-item-${i + 1}`} style={{ textDecoration: todoItem.completed ? 'line-through' : 'none' }}>
            <label htmlFor={`todo-cb-${i + 1}`} style={{ cursor: 'pointer' }}>
              {todoItem.title}

              <input type="checkbox" name="" id={`todo-cb-${i + 1}`}
                checked={todoItem.completed}
                onChange={() => handleCheckTodo(todoItem)}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Todos;