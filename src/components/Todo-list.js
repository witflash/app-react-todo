import React, { Component } from 'react';
import TodoItem from './Todo-item';

export class TodoList extends Component {
  render() {
    const todos = this.props.inSearch ? this.props.filtered : this.props.todos;
    const button = this.props.inSearch ? (
      <button onClick={this.props.clear}>Clear search</button>
    ) : null;
    const info = this.props.inSearch && !this.props.filtered.length ? <p>Nothing found.</p> : null;

    return (
      <div>
        {button}

        <ul className="todo__list">
          {info}
          {todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                delete={this.props.delete}
                toggle={this.props.toggle}
                update={this.props.update}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
