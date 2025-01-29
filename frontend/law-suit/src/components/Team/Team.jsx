import React from 'react'
import './Team.css'
import lawyer_1 from '../../assets/lawyer1.jpg'
import white_arrow from '../../assets/white-arrow.png'
import {Link  as LinkRoute, useNavigate } from 'react-router-dom'
import Campus from '../Campus/Campus'

const Team = ()=>{
 
    return (
        <div className='page'>
        <div className='team-container'>
        <div className='team-box'>
         <img className='Image' src={lawyer_1} alt="" />
         <div className="name">
             <h2>Lawyer Harvey Specter</h2>
             <p className='description'> Senior partner in the Pearson Hardman Firm...</p>
         </div>
        </div>

        <div className='team-box'>
          <img className='Image' src={lawyer_1} alt="" />
             <div className="name">
               <h2>Lawyer Mike Ross</h2>
                 <p className='description'> Senior partner in the Pearson Hardman Firm...</p>
             </div>
        </div>

       <LinkRoute > <div className='team-box'>
         <img className='Image' src={lawyer_1} alt="" />
         <div className="name">
             <h2>Lawyer Louis Litt</h2>
             <p className='description'> Senior partner in the Pearson Hardman Firm...</p>
         </div>
        </div></LinkRoute>

        </div>
       <LinkRoute to='/*team' element={<Campus/>}> <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button></LinkRoute>
        </div>
        
    )
}

export default Team