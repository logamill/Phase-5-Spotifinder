import React from 'react';
import '../styles/card.scss';

function Card( props ) {

    return (
    <div className='card-container'>
        <span className='card-index'>{props.index +1}</span>
        <img className='card-image' src={props.track.image}></img>
        <div className='card-text'>
            <span class="card-title">{props.track.name}</span>
            <span class="card-body">{props.track.artist}</span>
        </div>
    </div>
    )
}

export default Card;