import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import routes from './routes'
import configureStore from './store/configureStore'

import * as serviceWorker from './serviceWorker';

import './global-style.scss'

let store = configureStore()

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <Provider store={store}>
      {routes}
    </Provider>,
    rootElement
  );
}
else {
  ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>,
    rootElement
  );
}

serviceWorker.unregister();
