import React, { Component } from 'react';
import './todo.scss';

class TodoItem extends Component {
  render() {
    return <li>{this.props.data.value}</li>;
  }
}

export default TodoItem;
