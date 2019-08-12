import { all } from "redux-saga/effects"
import LoginSaga from './login'
import LocationSaga from './location'

function* rootSaga() {
  yield all([
    LoginSaga(),
    LocationSaga()
  ])
}

export default rootSaga