import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Testimonials from "./components/Testimonials/Testimonials"
import Title from "./components/Tile/Title"
import PracticeAreas from './components/PracticeAreas/PracticeAreas';



function App() {


  return (
   
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='WHAT WE OFFER' title='PRACTICE AREAS'></Title>
        <PracticeAreas/>
      <About/>
      <Title subTitle='OUR STAFF' title='MEET THE TEAM'></Title> 
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Our Clients Say'/>
      <Testimonials></Testimonials>
      <Title subTitle='Contact Us' title='Get in touch'/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App
