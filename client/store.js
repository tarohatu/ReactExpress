import { createStore } from 'redux'
import reducers from './states'

export const configureStore = (initialState = {}) => {  
  const store = createStore(
      reducers,
  )
  return store
}