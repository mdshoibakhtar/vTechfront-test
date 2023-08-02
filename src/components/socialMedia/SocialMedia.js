import React from 'react'
import { Link } from "react-router-dom";

import { LuPhoneCall } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsChatQuote } from "react-icons/bs";
import Boucher from '../boucherDload/Boucher';
function SocialMedia() {
    return <div>


        <div className="social-media-container">
            <ul className="soc-media-list">
                <li className="media-box">
                    <LuPhoneCall className="social-media-link" />
                </li>
                <li className="media-box">
                    <GoMail className="social-media-link" />
                </li>
                <li className="media-box">
                    <PiWhatsappLogoLight className="social-media-link" />
                </li>
                <li className="media-box">
                    <SlSocialLinkedin className="social-media-link" />
                </li>
                <li className="media-box">
                    <Link to={`/contact-us`}  >
                        < BsChatQuote className="social-media-link" />
                    </Link>
                </li>
            </ul>
            <Boucher />
        </div>
    </div>
}

export default SocialMedia
