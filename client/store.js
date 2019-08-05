import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './states'
import rootSaga from './sagas'

export const configureStore = (initialState = {}) => {  
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
      reducers,
      applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  return store
}