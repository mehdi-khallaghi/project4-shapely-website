import './Section7-download.css'
import React from 'react'

function Section7() {
  return (
    <div className='section7'>
      <div className="main-first">
        <h1>Our Main Clients</h1>
        <ul className="social">
          <li><a href="/"><img src="sass-logo.png" alt="sass" /></a></li>
          <li><a href="/"><img src="so-logo.png" alt="col" /></a></li>
          <li><a href="/"><img src="less-logo.png" alt="less" /></a></li>
          <li><a href="/"><img src="js-logo.png" alt="js" /></a></li>
          <li><a href="/"><img src="html5-logo.png" alt="html5" /></a></li>
          <li><a href="/"><img src="bootstrap-logo.jpg" alt="bootstrap" /></a></li>
          <li><a href="/"><img src="css-logo.png" alt="css3" /></a></li>
          <li><a href="/"><img src="facebook-logo.png" alt="facebook" /></a></li>
        </ul>
      </div>
      <div className="main-second">
        <p>Do you like this awesome WordPress theme?</p>
        <buton className="btn-3">DOWNLOAD NOW</buton>
      </div>
    </div>
  )
}

export default Section7;
