import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import NavigationBar from './components/navigation-bar';
import Portfolio from './components/portfolio';
import Footer from './components/footer';

ReactDOM.render(
    <div>
      <NavigationBar />
      <Portfolio />
      <Footer />
    </div>
, document.getElementById('root'));

registerServiceWorker();

