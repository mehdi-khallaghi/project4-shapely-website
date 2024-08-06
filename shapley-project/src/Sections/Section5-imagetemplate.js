import React from 'react'

function ImageTemplate({ className, image, alt }) {
  return (
    <div className={className}>
      <a href="/"><img src={image} alt={alt} /></a>
    </div>
  )
}

export default ImageTemplate;
