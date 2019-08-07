import { actions } from '../../client/actions/login'

describe('actions', () => {
  it('should create an action to login id changed', () => {
    const type = "LOGIN_ID_CHANGED"
    const text = 'Finishdocs'
    const expectedAction = {
      type: type,
      payload: text
    }
    const action = actions.loginIdChanged(text)
    expect(action).toEqual(expectedAction)
  })

  it('should create an action to login password changed', () => {
    const type = "LOGIN_PASSWORD_CHANGED"
    const text = 'Finishdocs'
    const expectedAction = {
      type: type,
      payload: text
    }
    const action = actions.loginPasswordChanged(text)
    expect(action).toEqual(expectedAction)
  })

  it('should create an action to login requested', () => {
    const type = "LOGIN_REQUESTED"
    const expectedAction = {
      type: type,
    }
    const action = actions.loginRequested()
    expect(action).toEqual(expectedAction)
  })

  it('should create an action to login request succeeded', () => {
    const type = "LOGIN_REQUEST_SUCCEEDED"
    const expectedAction = {
      type: type,
    }
    const action = actions.loginRequestSucceeded()
    expect(action).toEqual(expectedAction)
  })
  it('should create an action to login password changed', () => {
    const type = "LOGIN_REQUEST_FAILED"
    const text = '404 Error'
    const expectedAction = {
      type: type,
      payload: text
    }
    const action = actions.loginRequestFailed(text)
    expect(action).toEqual(expectedAction)
  })
})