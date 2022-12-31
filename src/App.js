import './App.css';
import React, { Component } from 'react'

import InputSpinner from './components/InputSpinner'
import DigitalClockDisplay from './components/DigitalClockDisplay'

const initState = {
  breakValue: 5,
  sessionValue: 25,
  leftTimeFor: 'Session',
  leftTime: 0,
  isPlaying: false
}

class App extends Component {
  state = initState

  incrementBreakValue() {
    let value = this.state.breakValue
    value++;
    this.setState({ breakValue: value })
  }

  decrementBreakValue() {
    let value = this.state.breakValue
    if (value > 0) {
      value--;
      this.setState({ breakValue: value })
    }
  }

  incrementSessionValue() {
    let value = this.state.sessionValue
    value++;
    this.setState({ sessionValue: value })
  }

  decrementSessionValue() {
    let value = this.state.sessionValue
    if (value > 0) {
      value--;
      this.setState({ sessionValue: value })
    }
  }

  setTimeForToState() {
    const { leftTimeFor, sessionValue, breakValue } = this.state

    switch (leftTimeFor) {
      case 'Session':
        this.setState({ leftTime: sessionValue })
        break;

      case 'Break':
        this.setState({ leftTime: breakValue })
        break;
      default:
        console.info('Unable to show timer value for', leftTimeFor);
        break;
    }
  }

  componentDidMount() {
    this.setTimeForToState()
  }

  handleReset() {
    this.setState(initState)
    setTimeout(() => {
      this.setTimeForToState()
    });
  }

  render() {
    const { breakValue, sessionValue, leftTimeFor, leftTime, isPlaying } = this.state
    return (
      <div className='container'>
        <h1>25 + 5 Clock</h1>
        <main>
          <div className='input-times'>
            <InputSpinner label='Break Length' value={breakValue} increment={this.incrementBreakValue.bind(this)} decrement={this.decrementBreakValue.bind(this)} />
            <InputSpinner label='Session Length' value={sessionValue} increment={this.incrementSessionValue.bind(this)} decrement={this.decrementSessionValue.bind(this)} />
          </div>
          <DigitalClockDisplay label={leftTimeFor} currentTime={leftTime} />
          <div className='action-buttons'>
            {isPlaying ? <button type='button' title='Pause'>⏸️</button> : <button type='button' title='Play'>▶️</button>}{' '}
            <button type='button' title='Reset' onClick={this.handleReset.bind(this)}>🔁</button>
          </div>
        </main>
        <footer>by <a href="http://codepen.io/mahfuz225bd" target="_blank" rel="noreferrer">Muhammad Sultan Al Mahfuz</a>. <a href="https://github.com/mahfuz225bd/fcc-25-5-clock" target="_blank" rel="noreferrer">GitHub Source Code</a>.</footer>
      </div>
    )
  }
}

export default App
