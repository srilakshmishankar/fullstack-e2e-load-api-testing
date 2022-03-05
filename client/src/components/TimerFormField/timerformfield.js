import React from 'react'
import Utils from '../../utils/utils'

const TimerFormField = (props) => (
  <div className="col-12">
    <h1 className="text-center">{Utils.formatTime(props.time)}</h1>
    <div className="row align-items-center">
      <div className="col-12 align-self-center text-center">
        <button
          className="btn btn-outline-secondary"
          onClick={props.startTimer}
          data-cy="start-button"
        >
          Start
        </button>
        <button
            className="btn btn-outline-secondary"
            onClick={props.stopTimer}
            data-cy="stop-button"
        >
          Stop
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={props.resetTimer}
          data-cy="reset-button"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
)

export default TimerFormField
