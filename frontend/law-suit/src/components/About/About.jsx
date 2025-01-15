import React from 'react'
import './About.css'
import order from '../../assets/order.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return(
        <div className='about'>
           <div className='about-left'>
            <img src={order} alt="" className='about-img'></img>
            <img src={play_icon} alt="" className='play-icon'></img>
           </div>

           <div className='about-right'>
            <h3> ABOUT OUR FIRM</h3>
            <h2> Where your legal needs are our top priority</h2>
            <p>With a team of highly skilled and dedicated attorneys, 
            we specialize in providing comprehensive legal services tailored to 
            meet the unique needs of each client. Our firm prides itself on its 
            commitment to excellence, integrity, and client satisfaction. 
            Whether you are facing a complex legal issue or simply need advice on a 
            legal matter, we are here to guide you every step of the way.</p>
            <p>Our attorneys take the time to understand your specific situation and work diligently to 
            develop effective strategies that achieve the best possible outcomes. 
            We are passionate about advocating for our clients' rights and are dedicated to delivering personalized legal 
            solutions that address your individual needs. Our firm is equipped with the knowledge and resources to handle a
            wide range of legal matters, from family law and estate planning to business litigation and criminal defense</p>
            <p>we are not just your legal representatives; we are your partners in navigating the complexities of the legal system.
            We strive to make a positive impact on the lives of our clients and the community we serve.
            </p>

           </div>
        </div>
    )
}

export default About