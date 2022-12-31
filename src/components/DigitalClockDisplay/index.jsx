import PropTypes from "prop-types"
import React from 'react'
import styles from './DigitalClockDisplay.module.css'

import secondToMinSec from '../../assets/js/secondToMS'

const DigitalClockDisplay = ({ label, currentTime }) => {
  return (
    <div className={styles.container}>
      <h2>{label}</h2>
      <time dateTime={new Date(currentTime)}>{secondToMinSec(currentTime)}</time>
    </div>
  )
}

DigitalClockDisplay.propTypes = {
  currentTime: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

DigitalClockDisplay.defaultProps = {
  currentTime: 0,
  label: 'Untitled'
}

export default DigitalClockDisplay