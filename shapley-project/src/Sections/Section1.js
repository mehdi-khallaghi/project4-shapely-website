import React from 'react'
import './Section1.css'

function Section1() {
    return (
        <div className='section1'>
            <div className='section1-items'>
                <div className="section1-img">
                    <img src='macbook.png' alt="macbook" />
                </div>
                <div className="section1-content">
                    <h2>SEO Friendly</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.
                    </p>
                    <button className="section1-btn">READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Section1;
