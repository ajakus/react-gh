import React, { Component } from 'react'
import './App.css';
import Country from './components/Country';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        United States
        </header>
        <Country />
      </div>
    );
  }
}

export default App;
