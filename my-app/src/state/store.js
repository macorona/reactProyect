import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createHashHistory from 'history/createHashHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import reducer from './reducer';

const reducers = combineReducers({
  reducer,
  routerReducer,

});

const history = createHashHistory();

const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension(): f => f
  )

);

export default store;
