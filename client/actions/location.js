import { createActions } from 'redux-actions'

export const actions = createActions({
  LOCATION_FETCH_REQUESTED: () => {},
  LOCATION_FETCH_SUCCEEDED: (locations) => (locations),
  LOCATION_FETCH_FAILED: (error) => (error),
})