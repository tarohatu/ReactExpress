import { call, takeLatest, put, all, select } from "redux-saga/effects"
import * as LoginActions from '../actions/login'
import * as ApplicationActions from '../actions/application'
import * as LoginAPI from '../apis/login'

const getLoginInfo = state => state.login

function* login(action) {
  const loginInfo = yield select(getLoginInfo)
  try {
    const result = yield call(LoginAPI.login, loginInfo.id, loginInfo.password)
    if(!result) {
      yield put(LoginActions.actions.loginRequestFailed("ログインに失敗しました"))
    } else {
      yield put(LoginActions.actions.loginRequestSucceeded())
      yield put(ApplicationActions.actions.accessTokenUpdated(result.data.token))
    }
  } catch (error) {
    yield put(LoginActions.actions.loginRequestFailed(error))
  }
}

function* rootSaga() {
  yield all([
    takeLatest(LoginActions.actions.loginRequested, login)
  ])
}

export default rootSaga