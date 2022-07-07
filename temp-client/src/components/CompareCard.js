import React from 'react';
import '../styles/compare_card.scss';

function Card( props ) {

    return (
    <div className='comp-card-container'>
        <span className='comp-card-index'>{props.index +1}</span>
        <img className='comp-card-image' src={props.track.image}></img>
        <div className='comp-card-text'>
            <span class="comp-card-title">{props.track.name}</span>
            <span class="comp-card-body">{props.track.artist}</span>
        </div>
    </div>
    )
}

export default Card;