import React from 'react';
import '../styles/user.scss'

function User( props ) {

    return  (
        <div className='user-container'>
            <span class="user-title">{props.user.name}</span>
            <div className='user-text'>
                <img className='user-image' src={props.user.image}></img>
            </div> 
        </div>
    )};

export default User;