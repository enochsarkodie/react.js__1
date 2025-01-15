import React from 'react'
import './Campus.css'
import lawyer_1 from '../../assets/lawyer1.jpg'
import lawyer_2 from '../../assets/lawyer2.jpg'
import lawyer_3 from '../../assets/lawyer3.jpg'
import lawyer_4 from '../../assets/lawyer4.jpg'

import white_arrow from '../../assets/white-arrow.png'

const Campus = ()=>{
    return (
        <div className='campus'>
          <div className="gallery">
            <img src={lawyer_1} alt=''></img>
            <img src={lawyer_2} alt=''></img>
            <img src={lawyer_3} alt=''></img>
            <img src={lawyer_4} alt=''></img>
             
          </div>
          <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
        </div>
    )
}


export default Campus