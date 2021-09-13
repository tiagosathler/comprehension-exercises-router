import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/users">Usuários</Link></li>
        </ul>
      </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route excat path="/users" component={() => <Users greetingsMessage="Boa tarde" />} />
      </BrowserRouter>  
    );
  }
}

export default App;
