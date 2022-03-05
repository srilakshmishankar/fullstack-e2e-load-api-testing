import React from 'react'

import TimerSessionCard from './timersessioncard'

class TimerSessionsView extends React.Component {
  renderTimeSessions(sessions) {
    if (sessions.length > 0) {
      return sessions.map((session) => {
        return (
          <TimerSessionCard
            key={session.id}
            name={session.name}
            time={session.time}
            createdAt={session.createdAt}
          />
        )
      })
    } else {
      return <h3>You have no sessions.</h3>
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12"></div>
        <div className="col-12">
          {this.props.sessions && this.renderTimeSessions(this.props.sessions)}
        </div>
      </div>
    )
  }
}

export default TimerSessionsView
