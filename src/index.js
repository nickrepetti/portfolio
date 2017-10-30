import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import NavigationBar from './components/navigation-bar';
import Portfolio from './components/portfolio';

ReactDOM.render(
    <div>
      <NavigationBar />
      <Portfolio />
    </div>
, document.getElementById('root'));

registerServiceWorker();

