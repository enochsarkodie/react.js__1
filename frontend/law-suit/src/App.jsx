import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero'
import Home from "./components/Home/Home"
import Campus from "./components/Campus/Campus"
import PracticeAreas from "./components/PracticeAreas/PracticeAreas"
import AboutLawyer1 from "./components/About Lawyers/AboutLawyer1"
import AboutLawyer2 from "./components/About Lawyers/AboutLawyer2"

function App() {

  return (
    <div >
       
      <Routes>
         
        <Route path="/" element={<Home/>}/>
        <Route path="/*team" element={<Campus/>}/>
        <Route path="/practice-areas" element={<PracticeAreas/>}/>
        <Route path ="/harvey-specter" element={<AboutLawyer1/>}/>
        <Route path ="/mike-ross" element={<AboutLawyer2/>}/>
      </Routes>
      </div>
   
  )
}

export default App
