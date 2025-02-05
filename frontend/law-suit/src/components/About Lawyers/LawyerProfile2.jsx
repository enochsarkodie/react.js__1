import React from "react";
import "./LawyerProfile1.css"
import mail_icon from "../../assets/mail-icon.png"
import inbox from "../../assets/inbox.webp"
import linkedIn from "../../assets/linkedin.webp"
import facebook from "../../assets/facebook.webp"
import lawyer2 from "../../assets/lawyer2.jpg"


const LawyerProfile2 = ()=>{
    return (
        <div className="profile container">
            <div className="left-profile">
                <h3> Mike Ross</h3>
                <p> Senior Associate</p>
                <p>Email : mike.ross@blacklawconsult.com</p>
                <p>Contact: +1 4423 2344 2 & +233 2034 34576</p>
                <h4 className="follow-me">Follow me on  <img src={inbox} alt="" /> <img src={linkedIn} alt="" /> <img src={facebook} alt="" /></h4>
            </div>

            <div className="right-profile">
                <img src={lawyer2} alt="" className="lawyer-profile-img" />
            </div>
        </div>
    )
}

export default LawyerProfile2