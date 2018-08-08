import React, { Component } from 'react';
import TodoItem from './Todo-item';
import './todo.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    const todos = this.state.todos;
    const newTodo = {
      value: this._inputElement.value,
      key: new Date().getTime(),
    };

    e.preventDefault();
    todos.push(newTodo);
    e.target.reset();
    console.log(this.state.todos);
    this.setState({ todos: todos });
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
            return <TodoItem key={todo.key} data={todo} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
