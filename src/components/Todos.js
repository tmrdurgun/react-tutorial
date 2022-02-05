import React, { Component } from 'react';
import { TodoItem } from './TodoItem';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: null
    }

    this.getUsers();
  }

  getUsers = async () => {
    const todosReq = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await todosReq.json();

    this.setState({ todos })
    console.log('todos: ', todos);
  }

  render() {
    const { todos } = this.state;

    return (
      <>
        {todos ? todos.map((todo, i) => <TodoItem todo={todo} />) : <div>Yükleniyor...</div>}
      </>
    )
  }
}

export default Todos;