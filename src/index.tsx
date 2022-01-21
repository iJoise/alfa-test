import React from 'react';

import 'styles/reset.scss';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from 'pages/App';
import { store } from 'store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
