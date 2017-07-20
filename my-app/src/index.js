import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
//import App from './App';
import App from './AppContainer';
//import registerServiceWorker from './registerServiceWorker';
import store from './state/store';

ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

//registerServiceWorker();
