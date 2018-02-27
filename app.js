import React from 'react';
import ReactDOM from 'react-dom';
import FlightInformation from './components/FlightInformation';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
  reducer,
  compose(
     applyMiddleware(
       thunkMiddleware // lets us dispatch() functions
     )
  )
);

ReactDOM.render(
  <Provider store={store}> 
  <FlightInformation /> 
  </Provider>, document.getElementById('app'))
