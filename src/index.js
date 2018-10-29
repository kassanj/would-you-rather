import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import './index.css';
import App from './App';
import reducer from './reducers'
import middleware from './middleware'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    // primary: { main: '#6ba5d1' },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    h6: {
      fontWeight: 700
    }
  }
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(middleware));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
    </PersistGate>
  </Provider>,
document.getElementById('root')
)
