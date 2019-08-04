import { handleActions } from 'redux-actions'
import { actions } from '../actions/application'

const initialState = { 
  token: null,
}

export const reducer = handleActions({
  [actions.accessTokenUpdated]: (state, action) => ({
    ...state,
    token: action.payload,
  }),
  [actions.accessTokenExpired]: (state, action) => ({
    ...state,
    token: null,
  }),
}, initialState)