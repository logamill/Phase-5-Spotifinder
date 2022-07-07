import React from 'react';
import '../styles/compare_card_artist.scss';

function Card( props ) {

    return (
    <div className='comp-artist-container'>
        <span className='comp-artist-index'>{props.index +1}</span>
        <img className='comp-artist-image' src={props.artist.image}></img>
        <div className='comp-artist-text'>
            <span class="comp-artist-title">{props.artist.name}</span>
            { props.artist.genre.length > 0 ? 
            props.artist.genre.map((el, i) => {
                while (i < 2)
                return (
                    <span class="comp-artist-body">{el}</span>
                )
            })
            :
            <span class="comp-artist-body">-</span>
            }  
        </div>
    </div>
    )
}

export default Card;