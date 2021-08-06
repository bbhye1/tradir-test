import { createStore, applyMiddleware } from '@reduxjs/toolkit';

import rootReducer from './slice';

import { rootSaga } from './index';

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(rootSaga);