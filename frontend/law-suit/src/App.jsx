import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import Testimonials from "./components/Testimonials/Testimonials"
import Title from "./components/Tile/Title"


function App() {


  return (
   
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Programs' title='What We Offer'></Title>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'></Title> 
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials></Testimonials>
      <Title subTitle='Contact Us' title='Get in touch'/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App
