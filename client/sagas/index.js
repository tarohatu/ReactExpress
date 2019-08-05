import { all } from "redux-saga/effects"
import LoginSaga from './login'

function* rootSaga() {
  yield all([
    LoginSaga()
  ])
}

export default rootSaga