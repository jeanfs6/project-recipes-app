import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProvedorContextoDoStars from './context/index';

// Release Main Group 19 - 0 Requisitos
// Requisitos 02 a 08

ReactDOM.render(
  <ProvedorContextoDoStars>
    <App />
  </ProvedorContextoDoStars>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
