import { put, takeEvery, fork, delay } from 'redux-saga/effects'
import * as TYPE from '../_constant'
import { FetchImagesTypes, ImagesTypes } from '../_interface'

export function* watchFetch() {
  yield takeEvery(TYPE.FETCH_IMAGES, fetchImage)
}

export function* fetchImage() {
  try {
    const rs = yield fetch(
      `https://jsonplaceholder.typicode.com/photos/${~~(Math.random() * 100)}`
    )
    const rawData = yield rs.json()
    const data = { ...rawData }
    yield put(
      successFetch({
        ...data,
        isLoading: true
      })
    )
    yield fork(changeStatus, { ...data, isLoading: false })
  } catch (err) {
    yield put(failFetch(null))
  }
}

function* changeStatus(payload: ImagesTypes) {
  yield delay(1000)
  yield put(loadingStatus(payload))
}

const loadingStatus = (payload: ImagesTypes): FetchImagesTypes => ({
  type: TYPE.LOADING_STATUS,
  payload
})

const successFetch = (payload: ImagesTypes): FetchImagesTypes => ({
  type: TYPE.SUCCESS,
  payload
})

const failFetch = (payload: null): FetchImagesTypes => ({
  type: TYPE.FAIL,
  payload
})
