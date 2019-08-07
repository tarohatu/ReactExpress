import { handleActions } from 'redux-actions'
import { actions } from '../actions/login'

const initialState = { 
  id: "",
  password: "",
  loading: false,
  error: ""
}

export const reducer = handleActions({
  [actions.loginIdChanged]: (state, action) => ({
    ...state,
    id: action.payload,
  }),
  [actions.loginPasswordChanged]: (state, action) => ({
    ...state,
    password: action.payload,
  }),
  [actions.loginRequested]: (state) => ({
    ...state,
    loading: true,
  }),
  [actions.loginRequestSucceeded]: (state, action) => ({
    ...state,
    loading: false,
    error: "",
  }),
  [actions.loginRequestFailed]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  })

}, initialState)