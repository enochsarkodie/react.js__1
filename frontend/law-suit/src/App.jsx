import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero'
import Home from "./components/Home/Home"
import Campus from "./components/Campus/Campus"
import PracticeAreas from "./components/PracticeAreas/PracticeAreas"

function App() {

  return (
    <div >
       
      <Routes>
         
        <Route path="/" element={<Home/>}/>
        <Route path="/*team" element={<Campus/>}/>
        <Route path="/practice-areas" element={<PracticeAreas/>}/>
      </Routes>
      </div>
   
  )
}

export default App
