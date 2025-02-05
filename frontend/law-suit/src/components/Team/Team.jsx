import React from 'react'
import './Team.css'
import lawyer_1 from '../../assets/lawyer1.jpg'
import lawyer_2 from '../../assets/lawyer2.jpg'
import lawyer_3 from '../../assets/lawyer3.jpg'
import white_arrow from '../../assets/white-arrow.png'
import {Link  as LinkRoute, useNavigate } from 'react-router-dom'
import Campus from '../Campus/Campus'
import AboutLawyer1 from '../About Lawyers/AboutLawyer1'
import AboutLawyer2 from '../About Lawyers/AboutLawyer2'


const Team = ()=>{
 
    return (
    <div >
        <div className="lawyers">
            <div className="lawyer">
                             <img src={lawyer_1} alt="" className="lawyer-image" /> 
                              <div className="img-content">
                                <h2>Harvey Specter</h2>
                                <p> Senior partner</p>
                              </div>
                              </div>
            
                              <div className="lawyer">
                             <img src={lawyer_2} alt="" className="lawyer-image" /> 
                              <div className="img-content">
                                <h2>Harvey Specter</h2>
                                <p> Senior partner</p>
                              </div>
                              </div>
            
                              <div className="lawyer">
                             <img src={lawyer_3} alt="" className="lawyer-image" /> 
                              <div className="img-content">
                                <h2>Harvey Specter</h2>
                                <p> Senior partner</p>
                              </div>
                              </div>
        </div>
         <button className='btn dark-btn'>See more here<img src={white_arrow} alt="" /></button>
    </div>    
    )
}

export default Team