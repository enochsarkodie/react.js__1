import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
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
      <Title subTitle='TESTIMONIALS' title='what Student Says'/>
      <Testimonials></Testimonials>
      </div>
     
    </div>
  )
}

export default App
