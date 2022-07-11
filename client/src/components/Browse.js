import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import User from './User';
import '../styles/browse.scss';

function Browse( user, setUserData ) {
    const [users, setUsers] = useState([]);
    const [compareUser, setCompareUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    
    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
                setLoading(false)
            })
    }, [])

    function handleUserClick(data) {
        const id = data.id
        history.push(`/compare/${id}`)
    }

    const usersToDisplay = users.map((el, i) => {
        if(user.user.username !== el.username && el.spotify_id)
        return (
            <div className='user-select' onClick={() => handleUserClick(el)}>
                <User key={i} user={el} />
            </div>
        )});

    return (
        <>
        { 
        loading ? 
            <div>loading...</div>
        :
        <>
            <div className='browse-header'>
                <h2>All users</h2>
                <h3><span>// + match</span></h3>
            </div>
            <div className='browse-users'>{usersToDisplay}</div>
        </>
        }
        </>
    )
}

export default Browse;