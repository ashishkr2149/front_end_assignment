import React from 'react'
import './Home.css'
import Illustration from '../../assets/Illustration.png'
import Logo1 from '../../assets/Logo (1).png'
import Logo2 from '../../assets/Logo (2).png'
import Logo3 from '../../assets/Logo (3).png'
import Logo4 from '../../assets/Logo (4).png'
import Logo5 from '../../assets/Logo (5).png'
import Logo6 from '../../assets/Logo (6).png'
import Logo7 from '../../assets/Logo (7).png'
import Icon1 from '../../assets/Icon.png'
import Icon2 from '../../assets/Icon (1).png'
import Icon3 from '../../assets/Icon (2).png'


const Home = () => {
  return (
    <div className='home-container'>
      <div className='hero-section'>
        <div className='hero-content'>
            <div className='hero-content-body'>
                <div className='hero-content-body-header'>
                    <div>Lessons and insights</div>
                    <div>from 8 years</div>
                </div >
                <div className='hero-content-body-desc'>
                    Where to grow your business as a photographer:site or social media?
                </div>
            </div>
            <div className='hero-content-button'>
                Register
            </div>
        </div>
        <div className='illustration'>
            <img src = {Illustration} className='img-illustration'/>
        </div>
        <div className='dots'>
            <div className='dot active'></div>
            <div className='dot'></div>
            <div className='dot'></div>
        </div>
      </div>
      <div className='clients-container'>
        <div className='clients-content'>
            <div className='clients-section-title'>
                Our Clients
            </div>
            <div className='clients-section-desc'>
                We have been working with some Fortune 500+ clients
            </div>
        </div>
        <div className='clients-logo'>
            <span>
                <img src = {Logo1} />
            </span>
            <span>
                <img src = {Logo2} />
            </span>
            <span>
                <img src = {Logo3} />
            </span>
            <span>
                <img src = {Logo4} />
            </span>
            <span>
                <img src = {Logo5} />
            </span>
            <span>
                <img src = {Logo6} />
            </span>
            <span>
                <img src = {Logo7} />
            </span>

        </div>
      </div>
      <div className='commmuntity-container'>
        <div className='community-header'>
            <div className='community-header-title'>
                Manage your entire community in a single system
            </div>
            <div className='community-header-desc'>
                Who is Nextcent suitable for?
            </div>
        </div>
        <div className='community-body'>
            <div className='community-body-tile'>
                <div className='community-body-title-header'>
                    <div>
                        <img src = {Icon1} />
                    </div>
                    <div className='community-body-tile-title'>
                        Membership Organisations
                    </div>
                </div>
                <div className='community-body-title-desc'>
                    Our membership management software provides full automation of membership renewals and payments
                </div>
            </div>
            <div className='community-body-tile'>
                <div className='community-body-title-header'>
                    <div>
                        <img src = {Icon2} />
                    </div>
                    <div className='community-body-tile-title'>
                        National Associations
                    </div>
                </div>
                <div className='community-body-title-desc'>
                    Our membership management software provides full automation of membership renewals and payments
                </div>
            </div>
            <div className='community-body-tile'>
                <div className='community-body-title-header'>
                    <div>
                        <img src = {Icon3} />
                    </div>
                    <div className='community-body-tile-title'>
                        Clubs And Groups
                    </div>
                </div>
                <div className='community-body-title-desc'>
                    Our membership management software provides full automation of membership renewals and payments
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
