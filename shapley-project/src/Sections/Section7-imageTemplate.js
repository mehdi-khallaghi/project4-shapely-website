import React from 'react'

function ImageTemplate({image , alt}) {
  return (
    <div>
      <a href="/"><img src={image} alt={alt} /></a>
    </div>
  )
}

export default ImageTemplate
