import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import TodoList from './components/Todo-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Learn React with Todo MVC</h1>
        </header>
        <main className="App-container">
          <TodoList />
        </main>
      </div>
    );
  }
}

export default App;
