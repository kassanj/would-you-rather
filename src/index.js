import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'

import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers'
import middleware from './middleware'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
}

const pReducer = persistReducer(persistConfig, reducers)
const store = createStore(pReducer, middleware)
const persistor = persistStore(store)


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
document.getElementById('root')
)
