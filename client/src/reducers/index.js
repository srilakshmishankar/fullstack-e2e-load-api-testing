import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router'
import timerReducer from './timerReducer'

const rootReducer = (history) =>
  combineReducers({
    form: formReducer,
    sessions: timerReducer,
    router: connectRouter(history),
  })

export default rootReducer
