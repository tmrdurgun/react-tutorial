import { useState } from 'react';

const Todos = () => {
  const [newTodo, setNewTodo] = useState('');

  const [todos, setTodos] = useState([
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
  ]);

  const handleCheckTodo = (todoItem) => {
    setTodos(todos.map((item, i) => {
      if (item.id === todoItem.id) item.completed = !item.completed;
      return item;
    }))
  }

  const handleAddTodo = () => {
    setTodos([...todos, {
      "userId": 1,
      "id": todos.length + 1,
      "title": newTodo,
      "completed": false
    }])
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
                value={todoItem.completed}
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