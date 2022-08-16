import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterStateReducer from './reducers/counterStateReducer';
import uiStateReducer from './reducers/uiStateReducer';
import rootSaga from './sagas';

let storeInstance;

function initStore() {
  let sagaMiddleware = createSagaMiddleware();
  storeInstance = configureStore({
    reducer: {
      uiState: uiStateReducer,
      counterState: counterStateReducer,
    },
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        thunk: false,
      }).concat([sagaMiddleware]);
    },
  });
  sagaMiddleware.run(rootSaga);
  return storeInstance;
}

export default function () {
  if (storeInstance) {
    return storeInstance;
  }
  return initStore();
}
