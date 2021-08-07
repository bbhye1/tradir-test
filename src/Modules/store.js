import { createStore, applyMiddleware } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './slice';

import { rootSaga } from './index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(rootSaga);
