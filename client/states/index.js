import { combineReducers } from 'redux'
import * as Application from './application'
import * as Login from './login'
import * as MapData from './map'

const reducers = combineReducers({
  application: Application.reducer,
  login: Login.reducer,
  map: MapData.reducer
})

export default reducers