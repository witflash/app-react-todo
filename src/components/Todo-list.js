import React, { Component } from 'react';
import TodoItem from './Todo-item';
import './todo.scss';
import TodoTrash from './Todo-trash';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      trash: [],
    };
    this.todos = [];
    this.trash = [];
    this.addTodo = this.addTodo.bind(this);
    this.emptyTrash = this.emptyTrash.bind(this);
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
    this.addToTrash(id);
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
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.value = value;
      }
    });
    this.setState({ todos: this.todos });
  }

  addToTrash(id) {
    this.trash.push(this.todos.filter(todo => todo.id === id)[0]);
    this.setState({ trash: this.trash });
  }

  emptyTrash() {
    this.trash = [];
    this.setState({ trash: [] });
  }

  render() {
    return (
      <div className="todo">
        <div className="todo__block">
          <form onSubmit={this.addTodo} className="todo__header">
            <input
              placeholder="Add todo"
              className="todo__input"
              ref={a => (this._inputElement = a)}
            />
          </form>
          <ul className="todo__list">
            {this.todos.map(todo => {
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

        <TodoTrash todos={this.trash} empty={this.emptyTrash} />
      </div>
    );
  }
}

export default TodoList;
