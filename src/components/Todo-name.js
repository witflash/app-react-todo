import React, { Component } from 'react';
import './todo.scss';

class TodoName extends Component {
  render() {
    return <li className="todo__deleted">{this.props.todo.value}</li>;
  }
}

export default TodoName;
