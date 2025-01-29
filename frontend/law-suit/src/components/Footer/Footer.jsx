import React from 'react'
import './Footer.css'

const Footer = ()=>{
    return (
        <div className='footer'>
          <p>Quick Links</p>
          <ul>
            <li>Ghana Revenue Authority</li>
            <li>Registrar General's Department</li>
            <li>Ghana School of law</li>
            <li>SSNIT</li>
            <li>Ghana Investment Promotion Center</li>
          </ul>
          <p>@ 2025 enoch@sarkodie.com. All rights reserved</p>
          <ul className='terms'>
            <li>Terms of services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
    )
}


export default Footer;