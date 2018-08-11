import React, { Component } from 'react';
import './todo.scss';
import TodoTrash from './Todo-trash';
import { TodoList } from './Todo-list';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filtered: [],
      inSearch: false,
      trash: [],
    };
    this.todos = [
      {
        value: 'First todo',
        id: 1,
        completed: false,
      },
      {
        value: 'Second todo',
        id: 2,
        completed: false,
      },
      {
        value: 'Third todo',
        id: 3,
        completed: false,
      },
      {
        value: 'Fourth todo',
        id: 4,
        completed: false,
      },
      {
        value: 'Fifth todo',
        id: 5,
        completed: false,
      },
    ];
    this.trash = [];
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.emptyTrash = this.emptyTrash.bind(this);
    this.searchTodos = this.searchTodos.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount = () => {
    this.setState({ todos: this.todos });
  };

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

  searchTodos() {
    const regexp = this._searchInput.value;

    this.filtered = this.todos.filter(
      todo => todo.value.toLowerCase().search(regexp.toLowerCase()) !== -1
    );
    this.setState({ filtered: this.filtered, inSearch: true });
  }

  clearSearch() {
    this._searchInput.value = '';
    this.setState({ filtered: [], inSearch: false });
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
          <div className="todo__header">
            <form onSubmit={this.addTodo} className="todo__form">
              <input
                placeholder="Add todo"
                className="todo__input"
                ref={a => (this._inputElement = a)}
              />
            </form>

            <input
              onChange={this.searchTodos}
              className="todo__input-search"
              placeholder="Search"
              ref={s => (this._searchInput = s)}
            />
          </div>

          <TodoList
            todos={this.state.todos}
            filtered={this.state.filtered}
            inSearch={this.state.inSearch}
            clear={this.clearSearch}
            delete={this.deleteTodo}
            toggle={this.toggleTodo}
            update={this.updateTodo}
          />
        </div>

        <TodoTrash todos={this.trash} empty={this.emptyTrash} />
      </div>
    );
  }
}

export default Todos;
