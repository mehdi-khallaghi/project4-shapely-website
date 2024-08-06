import './Section7-download.css'
import React from 'react'
import ImageTemplate from './Section7-imageTemplate';

function Section7() {

  const s7img = [
    {image : "sass-logo.png" , alt : "col"},
    {image : "so-logo.png" , alt : "col"},
    {image : "less-logo.png" , alt : "less"},
    {image : "js-logo.png" , alt : "js"},
    {image : "html5-logo.png" , alt : "html5"},
    {image : "bootstrap-logo.jpg" , alt : "bootstrap"},
    {image : "css-logo.png" , alt : "css3"},
    {image : "facebook-logo.png" , alt : "acebook"},
  ]
  return (
    <div className='section7'>
      <div className="main-first">
        <h1>Our Main Clients</h1>
        <ul className="social">
          <li><ImageTemplate {...s7img[0]}/></li>
          <li><ImageTemplate {...s7img[1]}/></li>
          <li><ImageTemplate {...s7img[2]}/></li>
          <li><ImageTemplate {...s7img[3]}/></li>
          <li><ImageTemplate {...s7img[4]}/></li>
          <li><ImageTemplate {...s7img[5]}/></li>
          <li><ImageTemplate {...s7img[6]}/></li>
          <li><ImageTemplate {...s7img[7]}/></li>
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
