import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/todos')
      .then(response => response.json())
      .then(data => this.setState({
        todos: data
      }));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(data => this.setState({
        todos: this.state.todos.concat(data)
      }))
      .catch(error => {
        console.error('Error:', error);
      });
  }

  toggleCompleted(todoId) {
    let todoIndex, checked;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].todoId === todoId) {
        todoIndex = i;
        checked = { isCompleted: !this.state.todos[i].isCompleted };
        break;
      }
    }
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(checked)
    })
      .then(response => response.json())
      .then(todo => {
        const newTodos = this.state.todos.slice();
        newTodos[todoIndex] = todo;
        this.setState({ todos: newTodos });
      })
      .catch(err => console.error(err));
  }

  deleteButton(todoId) {
    let todoIndex;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].todoId === todoId) {
        todoIndex = i;
        break;
      }
    }
    fetch(`/api/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        const newTodos = this.state.todos.slice();
        newTodos.splice(todoIndex, 1);
        this.setState({
          todos: newTodos
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteButton={this.deleteButton}/>
          </div>
        </div>
      </div>
    );
  }
}
