import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const container = document.getElementById('root');
ReactDOM.render(<App />, container);

serviceWorker.unregister();
