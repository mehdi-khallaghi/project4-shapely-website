import './Section5-img.css'
import React from 'react'
import ImageTemplate from './Section5-imagetemplate'

function Section5() {

    const images = [
        { image: 'img1.png', alt: 1, className: 'img-item' },
        { image: 'img2.png', alt: 2, className: 'img-item' },
        { image: 'img3.png', alt: 3, className: 'img-item' },
        { image: 'img4.png', alt: 4, className: 'img-item' },
        { image: 'img5.png', alt: 5, className: 'img-item' },
        { image: 'img6.png', alt: 6, className: 'img-item' },
        { image: 'img7.png', alt: 7, className: 'img-item' },
        { image: 'img8.png', alt: 8, className: 'img-item' },
        { image: 'img9.png', alt: 9, className: 'img-item' },
        { image: 'img10.png', alt: 10, className: 'img-item' },
        { image: 'img1.png', alt: 11, className: 'img-item' },
        { image: 'img2.png', alt: 12, className: 'img-item' },

    ]
    return (
        <div className='section5'>
            <div className='s5-title'>
                <h2>Our Latest Projects</h2>
                <p>Here is our latest projects. You'll love them!</p>
            </div>
            <div className='s5-images'>
                <ImageTemplate {...images[0]} /> 
                <ImageTemplate {...images[1]} /> 
                <ImageTemplate {...images[2]} /> 
                <ImageTemplate {...images[3]} /> 
                <ImageTemplate {...images[4]} /> 
                <ImageTemplate {...images[5]} /> 
                <ImageTemplate {...images[6]} /> 
                <ImageTemplate {...images[7]} /> 
                <ImageTemplate {...images[8]} /> 
                <ImageTemplate {...images[9]} /> 
                <ImageTemplate {...images[10]} /> 
                <ImageTemplate {...images[11]} /> 
                
            </div>
        </div>
    )
}

export default Section5;   