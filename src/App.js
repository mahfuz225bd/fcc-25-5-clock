import './App.css';
import React, { Component } from 'react'

import InputSpinner from './components/InputSpinner'
import Display from './components/Display'

class App extends Component {
  state = {
    breakValue: 5,
    sessionValue: 25,
    leftTimeFor: 'Session',
    leftTime: 0,
    isPlaying: true
  }

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

  componentDidMount() {
    this.setState({ leftTime: this.state.sessionValue })
  }

  render() {
    const { breakValue, sessionValue, leftTimeFor, leftTime } = this.state
    return (
      <div className='container'>
        <h1>25 + 5 Clock</h1>
        <main>
          <div className='input-times'>
            <InputSpinner label='Break Length' value={breakValue} increment={this.incrementBreakValue.bind(this)} decrement={this.decrementBreakValue.bind(this)} />
          </div>
          <Display />
          <div className='action-buttons'>
            <button type='button'>Play/Pause</button>{' '}
            <button type='button'>Reset</button>
          </div>
        </main>
        <footer>
          Footer Text
        </footer>
      </div>
    )
  }
}

export default App
