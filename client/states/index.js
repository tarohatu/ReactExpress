import { combineReducers } from 'redux'
import * as Application from './application'
import * as Login from './login'

const reducers = combineReducers({
  application: Application.reducer,
  login: Login.reducer
})

export default reducers