import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
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

const store = createStore(reducers, middleware)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
document.getElementById('root')
)
