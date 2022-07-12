import React from 'react';
import '../styles/bar_card.scss';

function BarCard( props ) {

    return (
    <div className='bar-card-container'>
        <span className='bar-card-index'>{props.index +1}</span>
        <img className='bar-card-image' src={props.track.image}></img>
        <div className='bar-card-text'>
            <span class="bar-card-title">{props.track.name}</span>
            <span class="bar-card-body">{props.track.artist}: {Math.round(props.number * 100)}%</span>
            {/* <span class="bar-card-number">{props.number}</span> */}
        </div>
    </div>
    )
}

export default BarCard;