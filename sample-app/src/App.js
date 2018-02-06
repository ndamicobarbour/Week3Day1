import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, Jumbotron, Button, Nav, NavItem, Navs} from 'react-bootstrap';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Cards from './Cards.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
