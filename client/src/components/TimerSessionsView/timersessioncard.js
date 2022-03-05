import React from 'react'
import Utils from '../../utils/utils'

const TimerSessionCard = (props) => (
  <div className="card">
    <div className="card-body" data-cy="session-data">
      <h5 className="card-title" data-cy="session-name">{props.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted" data-cy="session-created-at">{props.createdAt}</h6>
      <p className="card-text" data-cy="session-duration">Duration: {Utils.formatTime(props.time)}</p>
    </div>
  </div>
)

export default TimerSessionCard
