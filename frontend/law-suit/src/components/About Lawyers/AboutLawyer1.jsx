import React from 'react'
import './AboutLawyer1.css'
import Navbar1 from '../Navbar/Navbar1'
import LawyerProfile1 from './LawyerProfile1'
import Portfolio from './Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Title from '../Tile/Title'

const AboutLawyer1= ()=>{
    return(
        <div>
            <Navbar1/>
            <LawyerProfile1/>
            <div className="container" >
                <Title subTitle="BA ENGLISH & FRENCH (GHANA) LLB (GHANA); QCL" title="ADMITTED TO THE GHANA BAR IN 2019"/>
                 <Portfolio/>
                 <Title subTitle="Contact us" title="Get in touch"/>
                 <Contact/>
                 <Footer/>
            </div>
           
        </div>
    )
}

export default AboutLawyer1