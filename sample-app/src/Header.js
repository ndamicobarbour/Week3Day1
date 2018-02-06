import React, { Component } from 'react';
import logo from './logo.svg';
import { Jumbotron } from 'react-bootstrap';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './App.css';


class Header extends Component {
  render() {
    return (
      <header className="jumbotron">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello!</h1>
        <div>
          <Nav pills>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Info</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
        </div>
      </header>
    )
  }
}

export default Header;



class Example extends React.Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}
