import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'jotai';

import 'normalize.css';
import '@/style/index.scss';
import '@/style/tailwind.css';

import App from '@/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
