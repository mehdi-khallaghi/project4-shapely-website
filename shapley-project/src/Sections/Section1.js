import React from 'react'
import './Section1.css'

function Section1({title,desp,image}) {
    return (
        <div className='section1'>
            <div className='section1-items'>
                <div className="section1-img">
                    <img src={image} alt="macbook" />
                </div>
                <div className="section1-content">
                    <h2>{title}</h2>
                    <p>
                        {desp}
                    </p>
                    <button className="section1-btn">READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Section1;
