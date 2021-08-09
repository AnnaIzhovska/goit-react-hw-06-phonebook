import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={'...LOADING'} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);