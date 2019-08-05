import { createStore } from 'redux'
import reducers from './states'
import rootSaga from './sagas'

export const configureStore = (initialState = {}) => {  
  const store = createStore(
      reducers,
  )
  return store
}