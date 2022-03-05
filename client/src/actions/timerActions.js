import axios from '../utils/axios'
import { TIMER_SESSIONS_URL } from '../constants/timer/endpoints'
import { SET_TIMER_SESSIONS } from '../constants/timer/reducerTypes'

export function postNewTimerSession(data, callback) {
  return function (dispatch) {
    axios
      .post(TIMER_SESSIONS_URL, data)
      .then((response) => {
        callback()
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function getTimerSessions() {
  return function (dispatch) {
    axios
      .get(TIMER_SESSIONS_URL)
      .then((response) => {
        dispatch({ type: SET_TIMER_SESSIONS, data: response.data })
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
