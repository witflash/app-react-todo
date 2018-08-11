import React, { Component } from 'react';
import './todo.scss';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.classes = {
      normal: 'todo__item',
      active: 'todo__item edit',
      destroy: 'todo__item destroy',
    };
    this.state = {
      currentClass: this.classes.normal,
    };
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  editTodo() {
    const listener = e => {
      this.updateTodo(e);
      this._inputEdit.removeEventListener('click', listener);
    };
    this.setState({
      currentClass: this.classes.active,
    });
    this._inputEdit.value = this.props.todo.value;
    this._inputEdit.focus();
    this._inputEdit.addEventListener('blur', listener);
  }

  updateTodo(e) {
    e.preventDefault();
    this.props.update(this.props.todo.id, this._inputEdit.value);
    this.setState({
      currentClass: this.classes.normal,
    });
  }

  render() {
    return (
      <li className={this.state.currentClass}>
        <div className="todo__item-wrap">
          <input
            type="checkbox"
            className="todo__toggle"
            value={this.props.todo.completed}
            onChange={() => this.props.toggle(this.props.todo.id)}
          />
          <span className="todo__title" onDoubleClick={this.editTodo}>
            {this.props.todo.value}
          </span>
          <button
            type="button"
            className="todo__remove"
            onClick={() => this.props.delete(this.props.todo.id)}
          >
            X
          </button>
        </div>
        <form onSubmit={this.updateTodo}>
          <input className="todo__edit" ref={a => (this._inputEdit = a)} />
        </form>
      </li>
    );
  }
}

export default TodoItem;
