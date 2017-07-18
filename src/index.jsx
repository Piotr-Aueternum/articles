import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import reducer from './reducers';
import localStorage from './localStorage';
import setLocalStorage from './services';

let storageState;
if (localStorage()) {
  storageState = {
    data: localStorage(),
  };
}

const thunk = store => next => (action) => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState);
  } else {
    next(action);
  }
  setLocalStorage(store.getState().data);
};

const store = createStore(
  reducer,
  storageState,
  applyMiddleware(thunk),
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
