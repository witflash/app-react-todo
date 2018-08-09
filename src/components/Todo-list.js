import React, { Component } from 'react';
import TodoItem from './Todo-item';
import './todo.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.todos = [];
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    const newTodo = {
      value: this._inputElement.value,
      id: new Date().getTime(),
      completed: false,
    };

    e.preventDefault();
    this.todos.push(newTodo);
    e.target.reset();
    this.setState({ todos: this.todos });
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.setState({ todos: this.todos });
  }

  toggleTodo(id) {
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    this.setState({ todos: this.todos });
  }

  updateTodo(id, value) {
    console.log('update todo', id, 'with', value);
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.value = value;
      }
    });
    this.setState({ todos: this.todos });
  }

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.addTodo} className="todo__header">
          <input
            placeholder="Add todo"
            className="todo__input"
            ref={a => (this._inputElement = a)}
          />
        </form>
        <ul className="todo__list">
          {this.state.todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                delete={this.deleteTodo.bind(this)}
                toggle={this.toggleTodo.bind(this)}
                update={this.updateTodo.bind(this)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
