import React from 'react'

function ImageTemplate({ image, alt }) {
    return (
        <div>
            <img src={image} alt={alt} />
        </div>
    )
}

export default ImageTemplate;