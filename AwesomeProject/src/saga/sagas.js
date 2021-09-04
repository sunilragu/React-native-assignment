import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import loginAPI from '../api/AsyncCall';
import * as types from '../actions/types';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loginApi(action) {
   try {
      console.log("loginApi calling...");

      const user = yield call(loginAPI);

      yield put({type: types.SET_USER_INFO, user: user});

   } catch (e) {
      yield put({type: types.USER_FETCH_FAILED, message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  console.log("mySaga Login watcher");
  yield takeEvery(types.LOGIN, loginApi);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;