import { AiFillAndroid } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import './Footer.css'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className="f-title">
        Theme by
        <a href='/'> Word Press </a>
        Powered by
        <a href="/"> mehdi khallaghi/09120885499 </a>
      </div>
      <ul className='f-so'>
        <li><a href="/"><AiFillGooglePlusCircle/></a></li>
        <li><a href="/"><AiFillInstagram/></a></li>
        <li><a href="/"><AiFillGithub/></a></li>
        <li><a href="/"><AiFillFacebook/></a></li>
        <li><a href="/"><AiFillAndroid/></a></li>
        <li><a href="/"><AiFillLinkedin/></a></li>
      </ul>
    </div>
  );
}

export default Footer;
