import React, { Component } from 'react';
import { TodoItem } from './TodoItem';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: null,
      count: 0,
      list: ['1', '2', '3']
    }

    this.getUsers();
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  removeFromList = (index) => {
    this.setState((prevState) => {
      return {
        list: prevState.list.filter((item, i) => i !== index)
      }
    })
  }

  getUsers = async () => {
    const todosReq = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await todosReq.json();

    this.setState({ todos })
  }

  render() {
    const { todos, count, list } = this.state;

    console.log(list);

    return (
      <>
        {todos ? todos.map((todo, i) => <TodoItem todo={todo} />) : <div> Yükleniyor... </div>}

        <div>
          <button onClick={this.incrementCount}>increment {`(${count})`} </button>
          <button onClick={() => this.removeFromList(1)}>Remove from list </button>

        </div>
      </>
    )
  }
}

export default Todos;