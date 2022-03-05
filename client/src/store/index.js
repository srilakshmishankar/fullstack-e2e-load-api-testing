import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { history } from '../history'

import reduxThunk from 'redux-thunk'
import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers(history),
  composeEnhancers(applyMiddleware(reduxThunk, routerMiddleware(history)))
)

export default store
