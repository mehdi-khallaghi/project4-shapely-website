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
        <li><a href="/"><AiFillGooglePlusCircle className="f-icon"/></a></li>
        <li><a href="/"><AiFillInstagram className="f-icon"/></a></li>
        <li><a href="/"><AiFillGithub className="f-icon"/></a></li>
        <li><a href="/"><AiFillFacebook className="f-icon"/></a></li>
        <li><a href="/"><AiFillAndroid className="f-icon"/></a></li>
        <li><a href="/"><AiFillLinkedin className="f-icon"/></a></li>
      </ul>
    </div>
  );
}

export default Footer;
