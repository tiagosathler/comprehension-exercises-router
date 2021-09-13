import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </BrowserRouter>  
    );
  }
}

export default App;
