import React from 'react'
import './Programs.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const PracticeAreas = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <img src={program1} alt=""></img>
                <div className='caption'>
                    <img src={program_icon_1 } alt=""></img>
                    <p>Aviation and Maritime</p>
                </div>
            </div>

            <div className='program'>
                <img src={program2} alt=""></img>
                <div className='caption'>
                    <img src={program_icon_2 } alt=""></img>
                    <p>Real Estate & Construction</p>
                </div>
            </div>
             
            <div className='program'>
                <img src={program3} alt=""></img>
                <div className='caption'>
                    <img src={program_icon_3} alt=""></img>
                    <p>Immigration</p>
                </div>
            </div>
        </div>
    )
}

export default PracticeAreas;