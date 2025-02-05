import React from 'react'
import './Footer.css'

const Footer = ()=>{
    return (
        <div className='footer'>
          <p>Quick Links</p>
          <ul>
            <li><a href='https://gra.gov.gh/' target='_blank'>Ghana Revenue Authority</a></li>
            <li><a href='https://www.rgd.gov.gh/' target='_blank'>Registrar General's Department</a></li>
            <li><a href='' target='_blank'>Ghana School of law</a></li>
            <li><a href='https://www.ssnit.org.gh/' target='_blank'>SSNIT</a></li>
            <li><a href='' target='_blank'>Ghana Investment Promotion Center</a></li>
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