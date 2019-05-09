import { all, fork } from 'redux-saga/effects'
import { watchFetch } from './images'

export default function* rootSaga() {
  yield all([fork(watchFetch)])
}
