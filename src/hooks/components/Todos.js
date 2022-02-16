import { useState } from 'react';

const Todos = () => {

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
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
  ]);

  const handleCheckTodo = (todoItem) => {
    setTodos(todos.map((item, i) => {
      if (item.id === todoItem.id) item.completed = !item.completed;
      return item;
    }))
  }

  return (
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
  )
}

export default Todos;