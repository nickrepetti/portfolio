import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './styles/index.css';

import MenuBar from './components/menu-bar';
import Portfolio from './components/portfolio';

ReactDOM.render(
  <Router>
    <div>
      <MenuBar />
      <Route exact path="/" component={Portfolio} />
    </div>
  </Router>
, document.getElementById('root'));

