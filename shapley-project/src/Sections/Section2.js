import './Section2.css'

import React from 'react'

function Section2({title,desp,image}) {
    return (
        <div className='section2'>
            <div className='section2-items'>
                <div className="section2-content">
                    <h2>{title}</h2>
                    <p>
                        {desp}
                    </p>
                    <button className="section2-btn">READ MORE</button>
                </div>
                <div className="section2-img">
                    <img src={image} alt="portfolio" />
                </div>
            </div>
        </div>
    )
}

export default Section2;
