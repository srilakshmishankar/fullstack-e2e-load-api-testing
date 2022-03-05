import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import PageContainer from '../PageContainer/PageContainer'
import TimerSessionsView from '../../components/TimerSessionsView/timersessionsview'

class Sessions extends React.Component {
  componentDidMount() {
    this.props.getTimerSessions()
  }

  render() {
    const { sessions } = this.props
    return (
      <PageContainer>
        <TimerSessionsView sessions={sessions} />
      </PageContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sessions: state.sessions,
  }
}

export default connect(mapStateToProps, actions)(Sessions)
