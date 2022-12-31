import './App.css';
import React, { Component } from 'react'

import InputSpinner from './components/InputSpinner'
import DigitalClockDisplay from './components/DigitalClockDisplay'

const initState = {
  breakValue: 1 / 15,
  sessionValue: 1 / 15,
  leftTimeFor: 'Session',
  leftTimeSec: 0,
  isPlaying: false
}

class App extends Component {
  state = initState

  incrementBreakValue() {
    if (!this.state.isPlaying) {
      let value = this.state.breakValue
      if (value < 60) {
        value++;

        if (this.state.leftTimeFor === "Break") {
          this.setState({ breakValue: value, leftTimeSec: value * 60 }) // * 60 for converting min to sec
        } else {
          this.setState({ breakValue: value })
        }
      }
    }
  }

  decrementBreakValue() {
    if (!this.state.isPlaying) {
      let value = this.state.breakValue
      if (value > 0) {
        value--;

        if (this.state.leftTimeFor === "Break") {
          this.setState({ breakValue: value, leftTimeSec: value * 60 }) // * 60 for converting min to sec
        } else {
          this.setState({ breakValue: value })
        }
      }
    }
  }

  incrementSessionValue() {
    if (!this.state.isPlaying) {
      let value = this.state.sessionValue
      if (value < 60) {
        value++;

        if (this.state.leftTimeFor === "Session") {
          this.setState({ sessionValue: value, leftTimeSec: value * 60 }) // * 60 for converting min to sec
        } else {
          this.setState({ sessionValue: value })
        }
      }
    }
  }

  decrementSessionValue() {
    if (!this.state.isPlaying) {
      let value = this.state.sessionValue
      if (value > 0) {
        value--;

        if (this.state.leftTimeFor === "Session") {
          this.setState({ sessionValue: value, leftTimeSec: value * 60 }) // * 60 for converting min to sec
        } else {
          this.setState({ sessionValue: value })
        }
      }
    }
  }

  setLeftTimeForValueToState() {
    // setLeftTimeForValueToState as Second(s)
    const { leftTimeFor, sessionValue, breakValue } = this.state

    switch (leftTimeFor) {
      case 'Session':
        this.setState({ leftTimeSec: sessionValue * 60 })
        break;

      case 'Break':
        this.setState({ leftTimeSec: breakValue * 60 })
        break;
      default:
        console.info('Unable to show timer value for', leftTimeFor);
        break;
    }
  }

  toggleAndSetTimeFor = () => {
    const leftTimeFor = this.state.leftTimeFor
    this.setState({ leftTimeFor: leftTimeFor === 'Session' ? 'Break' : leftTimeFor === 'Break' ? 'Session' : '' })
  }

  countDown = () => {
    return setInterval(() => {
      const isPlaying = this.state
      if (isPlaying) {
        let leftTimeSec = this.state.leftTimeSec
        if (leftTimeSec === 0) {
          this.toggleAndSetTimeFor()
          this.setLeftTimeForValueToState()
        } else {
          if (!isPlaying) {
            clearInterval(this)
            return
          }
          leftTimeSec--;
          this.setState({ leftTimeSec })
        }
      }
    }, 1000);
  }

  componentDidMount() {
    // alert("This app should be tested!!! not ready to use.")
    this.setLeftTimeForValueToState()
  }

  handleReset() {
    this.setState(initState)
    this.componentDidMount()
  }

  handlePlay() {
    this.setState({ isPlaying: true })
    this.countDown()
  }

  handlePause() {
  }

  render() {
    const { breakValue, sessionValue, leftTimeFor, leftTimeSec, isPlaying } = this.state

    return (
      <div className='container'>
        <h1>25 + 5 Clock</h1>
        <main>
          <div className='input-times'>
            <InputSpinner label='Break Length' value={breakValue} increment={this.incrementBreakValue.bind(this)} decrement={this.decrementBreakValue.bind(this)} />
            <InputSpinner label='Session Length' value={sessionValue} increment={this.incrementSessionValue.bind(this)} decrement={this.decrementSessionValue.bind(this)} />
          </div>
          <DigitalClockDisplay label={leftTimeFor} currentTime={leftTimeSec} />
          <div className='action-buttons'>
            {isPlaying ? <button type='button' title='Pause' onClick={this.handlePause.bind(this)}>⏸️</button> : <button type='button' title='Play' onClick={this.handlePlay.bind(this)}>▶️</button>}{' '}
            <button type='button' title='Reset' onClick={this.handleReset.bind(this)}>🔁</button>
          </div>
        </main>
        <footer>by <a href="http://codepen.io/mahfuz225bd" target="_blank" rel="noreferrer">Muhammad Sultan Al Mahfuz</a>. <a href="https://github.com/mahfuz225bd/fcc-25-5-clock" target="_blank" rel="noreferrer">GitHub Source Code</a>.</footer>
      </div>
    )
  }
}

export default App
