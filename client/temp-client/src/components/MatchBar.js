import React, { useEffect, useState } from 'react';
import '../styles/match_bar.scss'

function MatchBar( props ) {
    const [style, setStyle] = useState({})

    const { data } = props 
    useEffect(() => {
        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                height: `${data}%`
            }
            setStyle(newStyle)
        }, 1000)
    }, [])

    return (
        <div>
        <div className='match'>
            <div className='match-bar' style={style} >
             </div>
             <div className='match-percent'>{data}%</div>
        </div>
        </div>
    )
};

export default MatchBar;