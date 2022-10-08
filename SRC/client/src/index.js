import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { config } from './config'
import { Auth0Provider } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

