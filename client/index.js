import React from "react"
import ReactDOM from "react-dom"
import Application from './pages/application/applicationContainer'
import { configureStore } from './store'
import { Provider } from 'react-redux'
import './index.css'
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("index")
) 
