import './App.css';
import React, { Component } from 'react'

import InputSpinner from './components/InputSpinner'
import Display from './components/Display'

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1>25 + 5 Clock</h1>
        <main>
          <div className='input-times'>
            <InputSpinner />
            <InputSpinner />
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
