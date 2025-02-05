import React from 'react'
import './AboutLawyer1.css'
import Navbar1 from '../Navbar/Navbar1'
import LawyerProfile2 from './LawyerProfile2'
import Portfolio from './Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Title from '../Tile/Title'

const AboutLawyer2= ()=>{
    return(
        <div>
            <Navbar1/>
            <LawyerProfile2/>
            <div className="container" >
                <Title subTitle="BA ENGLISH & FRENCH (GHANA) LLB (GHANA); QCL" title="ADMITTED TO THE GHANA BAR IN 2006"/>
                 <Portfolio/>
                 <Title subTitle="Contact us" title="Get in touch"/>
                 <Contact/>
                 <Footer/>
            </div>
           
        </div>
    )
}

export default AboutLawyer2