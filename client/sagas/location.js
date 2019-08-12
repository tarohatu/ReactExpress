import { call, takeLatest, put, all, select } from "redux-saga/effects"
import * as LocationActions from '../actions/location'
import * as LocationAPI from '../apis/location'

const getToken = state => state.application

function* location(action) {
  const applicationInfo = yield select(getToken)
  try {
    const result = yield call(LocationAPI.findAll, applicationInfo.token)
    if(!result) {
      yield put(LocationActions.locationFetchFailed, "位置情報を取得できませんでした")
    } else {
      yield put(LocationActions.actions.locationFetchSucceeded(result.data))
    }
  } catch (error) {
    yield put(LocationActions.locationFetchFailed, error)
  }
}

function* rootSaga() {
  yield all([
    takeLatest(LocationActions.actions.locationFetchRequested, location)
  ])
}

export default rootSaga