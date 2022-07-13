import React from 'react';
import '../styles/errors.scss'

function Errors(props) {

    let errorsToDisplay = props.props.map((el, i) => {
        return (
            <span className='errors-display'>{el}</span>
        )
    })
    return (
        <div className='errors-container'>
            {errorsToDisplay}
        </div>
    )
};

export default Errors;