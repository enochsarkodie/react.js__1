import React from 'react'
import './Campus.css'
import lawyer_1 from '../../assets/lawyer1.jpg'
import lawyer_2 from '../../assets/lawyer2.jpg'
import lawyer_3 from '../../assets/lawyer3.jpg'
import lawyer_4 from '../../assets/lawyer4.jpg'
import Navbar1 from '../Navbar/Navbar1'
import Hero1 from '../Hero/Hero1'
import Lawyers from '../Lawyers/Lawyers'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Title from '../Tile/Title'

const Campus = ()=>{
    return (
        <div>
          <Navbar1/>
          <Hero1/>
          <Title subTitle="....." title="LAWYERS"/>
          <Lawyers/>
          <div className="container">
          <Title subTitle="Contact us" title="Get in touch"/>
          <Contact/>
          <Footer/>
          </div>
         
        </div>      
    )
}


export default Campus