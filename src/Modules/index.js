import { put, call, takeEvery } from 'redux-saga/effects';

import { enableES5 } from 'immer';

import fetchData from '../service/api';

import { setBeers } from './slice';

enableES5();

function* fetchBeers(action) {
  try {
    const test = yield call(fetchData, action.payload);
    yield put(setBeers(test));
  } catch (e) {
    // TODO: 에러처리
  }
}

export function* rootSaga() {
  yield takeEvery('FETCH_BEERS', fetchBeers);
}

export default rootSaga;
