import React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../styles/header.css';

import profilePic from '../media/nick.jpg';

const Header = (props) => {
  return (
    <Row className="header">
      <Col md={4} mdOffset={1}>
        <img className="header__image" src={profilePic} alt="Nick Repetti" />
      </Col>
      <Col md={7}>
        <h1 className="header__name">Nick Repetti</h1>
        <h2 className="header__caption">Software Engineer &amp; Gamer</h2>
      </Col>
    </Row>
  );
};

export default Header;

