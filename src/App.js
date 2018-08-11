import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My React Todo List</h1>
        </header>
        <main className="App-container">
          <Todos />
        </main>
      </div>
    );
  }
}

export default App;
