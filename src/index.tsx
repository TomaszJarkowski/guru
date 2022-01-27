import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

process.env.NODE_ENV === 'production' &&
Sentry.init({
    dsn: 'https://fa2d952b5a2b42059d4cb7db2c8a858d@o1124870.ingest.sentry.io/6163172',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
