import { createActions } from 'redux-actions'

export const actions = createActions({
  LOGIN_ID_CHANGED: (id) => ({ id }),
  LOGIN_PASSWORD_CHANGED: (password) => ({ password }),
  LOGIN_REQUEST_SUCCEEDED: () => {},
  LOGIN_REQUEST_FAILED: (error) => ({ error }),
  LOGIN_REQUESTED: () => {},
})