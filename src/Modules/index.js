import { put, call, takeEvery } from "redux-saga/effects";

import { enableES5 } from "immer";

import { fetchData } from '../service/Api'
import { testT } from '../Modules/slice'


enableES5();

//wathcer saga
export function* rootSaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

function* fetchUser(action) {
  try {
     const test = yield call(fetchData, action.payload);
     yield put(testT(test));
  } catch (e) {
    // TODO: 에러처리
  }
}


export default rootSaga;
