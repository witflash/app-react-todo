import React, { Component } from 'react';
import TodoName from './Todo-name';

export class TodoTrash extends Component {
  render() {
    if (!this.props.todos.length) {
      return null;
    }
    return (
      <div className="todo__block">
        <h3 className="todo__header">Deleted Todos</h3>

        <ul className="todo__list">
          {this.props.todos.map(todo => {
            return <TodoName key={todo.id} todo={todo} />;
          })}
        </ul>

        <button onClick={this.props.empty}>Remove deleted</button>
      </div>
    );
  }
}

export default TodoTrash;
