import { /* put, takeEvery, */ all } from 'redux-saga/effects';
import { watchCreateLessions } from 'containers/HomePage/sagas';
export default function* rootSaga() {
  yield all([
      watchCreateLessions(),
  ]);
}
