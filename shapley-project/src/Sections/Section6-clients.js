import ImageTemplate from './Section5-imagetemplate';
import './Section6-clients.css'
import React from 'react'

function Section6() {

    const s6img = [
        { image: "so5.png", alt: "5" },
        { image: "so2.png", alt: "2" },
        { image: "so4.png", alt: "4" },
        { image: "so1.png", alt: "1" },
        { image: "so3.png", alt: "3" },

    ]
    return (
        <div className='section6'>
            <div className='s6-content'>
                <h1>What Our Customers Say</h1>
                <p>Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum, augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet turpis eu ullamcorper.</p>
                <div className="s6-img">
                    <ImageTemplate {...s6img[0]} />
                    <ImageTemplate {...s6img[1]} />
                    <ImageTemplate {...s6img[2]} />
                    <ImageTemplate {...s6img[3]} />
                    <ImageTemplate {...s6img[4]} />
                </div>
            </div>
        </div>
    )
}

export default Section6;
