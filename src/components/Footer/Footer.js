import React from 'react'
import './Footer.css'
import Rigth16 from '../../assets/Right16.png'
import FooterLogo from '../../assets/Footer Logo.png'
import SocialIcon1 from '../../assets/SocialIcon1.png'
import SocialIcon2 from '../../assets/SocialIcon2.png'
import SocialIcon3 from '../../assets/SocialIcon3.png'
import SocialIcon4 from '../../assets/SocialIcon4.png'
import Send from '../../assets/send.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-body'>
            <div className='footer-body-desc'>Pellentesque suscipit fringilla libero eu.</div>
            <div className='footer-body-button'>
                <div>Get a Demo</div>
                <img src = {Rigth16} />
            </div>
      </div>
      <div className='footer-big4'>
        <div className='company-info'>
            <div className='company-info-logo'>
                <img src = {FooterLogo} />
            </div>
            <div className='company-info-copyrights'>
                <div>Copyright © 2020 Nexcent ltd.</div>
                <div>All rights reserved</div>
            </div>
            <div className='conpany-info-social-links'>
                <div><img src = {SocialIcon1} /></div>
                <div><img src = {SocialIcon2} /></div>
                <div><img src = {SocialIcon3} /></div>
                <div><img src = {SocialIcon4} /></div>
            </div>
        </div>
        <div className='links'>
            <div className='links-column'>
                <div className='column-title'>Company</div>
                <div className='column-items'>
                    <div className='column-item'>About Us</div>
                    <div className='column-item'>Blog</div>
                    <div className='column-item'>Contact Us</div>
                    <div className='column-item'>Pricing</div>
                    <div className='column-item'>Testimonials</div>
                </div>
            </div>
            <div className='links-column'>
                <div className='column-title'>Support</div>
                <div className='column-items'>
                    <div className='column-item'>Help Centre</div>
                    <div className='column-item'>Terms of Service</div>
                    <div className='column-item'>Legal</div>
                    <div className='column-item'>Privacy Policy</div>
                    <div className='column-item'>Status</div>
                </div>
            </div>
            <div className='links-column'>
                <div className='column-title'>Stay up to date</div>
                    <div className='email-input-field'>
                        <div className='email-input-field-text'>Your email address</div>
                        <div className='email-input-field-icon'><img src={Send}/></div>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer