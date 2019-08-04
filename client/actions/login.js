import { createActions } from 'redux-actions'

export const actions = createActions({
  LOGIN_ID_CHANGED: (id) => ({ id }),
  LOGIN_PASSWORD_CHANGED: (password) => ({ password }),
  LOGIN_REQUEST_SUCCEEDED: (token) => ({ token }),
  LOGIN_REQUEST_FAILED: (error) => ({ error }),
  LOGIN_REQUESTED: () => {},
})