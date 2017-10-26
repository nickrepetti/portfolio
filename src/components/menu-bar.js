import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import '../styles/menu-bar.css';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = { navExpanded: false };
    this.setNavExpanded = this.setNavExpanded.bind(this)
    this.closeNav = this.closeNav.bind(this);
  }

  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }

  closeNav() {
    this.setState({ navExpanded: false });
  }

  render() {
    return (
      <Navbar
        fixedTop
        onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLinkContainer to="/" onClick={this.closeNav}><a>NR</a></IndexLinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav onSelect={this.closeNav}>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Portfolio</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem eventKey={3}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MenuBar;

