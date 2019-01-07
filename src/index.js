import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// STYLE
import './assets/styles/bootstrap-grid.min.css';
import './assets/styles/main.scss';
// Refs
import { Routes, Store } from './refs';

const rootNode = <Provider store={Store}><Routes /></Provider>

ReactDOM.render(rootNode, document.getElementById('root'));
serviceWorker.unregister();
