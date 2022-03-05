import { SET_TIMER_SESSIONS } from '../constants/timer/reducerTypes'

const initState = []

export default function (state = initState, action) {
  switch (action.type) {
    case SET_TIMER_SESSIONS:
      return action.data
    default:
      return state
  }
}
