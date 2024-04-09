import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <div className='header-container' >
        <div className='logo'>
            <img src = {Logo}/>
        </div>
        <div className = "header-menu">
            <span className='menu home'>Home</span>
            <span className='menu service'>Service</span>
            <span className='menu feature'>Feature</span>
            <span className='menu product'>Product</span>
            <span className='menu testimonial'>Testinomial</span>
            <span className='menu faq'>FAQ</span>
        </div>
        <div className='login-options'>
            <span className='login'>Login</span>
            <span className='signUp'>Sign Up</span>
        </div>
    </div>
  )
}

export default Header
