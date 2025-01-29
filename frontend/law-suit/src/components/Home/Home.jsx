import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Title from '../Tile/Title'
import PracticeAreas from '../PracticeAreas/PracticeAreas'
import About from '../About/About'
import Team from '../Team/Team'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'





const Home = ()=>{
    return(
        <div>
            <Navbar/>
        <Hero/>
        <div className="container">
            <Title subTitle="WHAT WE OFFER" title="PRACTICE AREAS"/>
            <PracticeAreas/>
            <About/>
            <Title subTitle="OUR STAFF" title="MEET THE TEAM"/>
            <Team/>
            <Title subTitle="TESTIMONIALS" title="WHAT OUR CLIENTS SAY"/>
            <Testimonials/>
            <Title subTitle="Contact us" title="Get in touch"/>
            <Contact/>
            <Footer/>

        </div>
      </div>
    )
}

export default Home