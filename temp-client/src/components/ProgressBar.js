import React, { useState } from 'react';
import '../styles/progress_bar.scss'

function ProgressBar({ data }) {
    const [style, setStyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${data}%`
        }
        setStyle(newStyle)
    }, 1000)

    return ( 

        <div className='progress'>
             <div className='progress-bar' style={style}>
                {data}%
            </div>
            {/* {
                data > 50 ? 
                <div className='progress-high' style={style}>{data}%</div>
                :
            <div className='progress-low' style={style}>
                {data}%
            </div>
            } */}
        </div>
    )
}

export default ProgressBar;