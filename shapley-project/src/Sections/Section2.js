import './Section2.css'

import React from 'react'

function Section2() {
    return (
        <div className='section2'>
            <div className='section2-items'>
                <div className="section2-content">
                    <h2>SEO Friendly</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.
                    </p>
                    <button className="section2-btn">READ MORE</button>
                </div>
                <div className="section2-img">
                    <img src='portfolio.png' alt="portfolio" />
                </div>
            </div>
        </div>
    )
}

export default Section2;
