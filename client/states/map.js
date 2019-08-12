import { handleActions } from 'redux-actions'
import { actions } from '../actions/location'

const initialState = { 
  locations: []
}

export const reducer = handleActions({
  [actions.locationFetchSucceeded]: (state, action) => ({
    ...state,
    locations: action.payload,
  }),
}, initialState)