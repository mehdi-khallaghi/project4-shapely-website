import './Banner.css'

import React from 'react'

function Banner() {
    return (
        <div className='banner-header'>
            <img src="3.png" alt='bg' />
            <div className='header-content'>
                <h1>We Change Everything</h1>
                <h1>WorldPress</h1>
                <p>This is the only WordPress theme you will ever want to use.</p>
                <div className='btn-header'>
                    <button className='bt-1'>READ MORE</button>
                    <button className='bt-2'>DOWNLOAD NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;
