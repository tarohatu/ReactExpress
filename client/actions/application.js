import { createActions } from 'redux-actions'

export const actions = createActions(
  {
    ACCESS_TOKEN_UPDATED: (token) => (token)
  },
  'ACCESS_TOKEN_EXPIRED',
)