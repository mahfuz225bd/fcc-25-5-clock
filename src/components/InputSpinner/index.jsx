import PropTypes from "prop-types"
import React from 'react'
import styles from './InputSpinner.module.css'

const InputSpinner = ({ label, value, increment, decrement }) => {
    return (
        <div className={styles.container}>
            <h3>{label}</h3>
            <section>
                <a onClick={increment}>🔼</a>
                <span className={styles.value}>{value}</span>
                <a onClick={decrement}>🔽</a>
            </section>
        </div>
    )
}

InputSpinner.propTypes = {
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

InputSpinner.defaultProps = {
    value: 0,
    label: 'Untitled'
}

export default InputSpinner