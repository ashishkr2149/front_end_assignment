import React from 'react'
import './Body.css'
import Unlock from '../../assets/Frame 35.png'
import Icon4 from '../../assets/Icon (3).png'
import Icon5 from '../../assets/Icon (4).png'
import Icon6 from '../../assets/Icon (5).png'
import Icon7 from '../../assets/Icon (6).png'
import Calendar from '../../assets/calendar.png'
import Customer from '../../assets/image 9.png'
import Logo8 from '../../assets/Logo (8).png'
import Logo9 from '../../assets/Logo (9).png'
import Logo10 from '../../assets/Logo (10).png'
import Logo11 from '../../assets/Logo (11).png'
import Logo12 from '../../assets/Logo (12).png'
import Logo13 from '../../assets/Logo (13).png'
import RightArrow from '../../assets/Right.png'
import Tile1 from '../../assets/image 18.png'
import Tile2 from '../../assets/image 19.png'
import Tile3 from '../../assets/image 20.png'

const Body = () => {
  return (
    <div className='body-container'>
      <div className='unlock-container'>
        <div className='unlock-logo'>
            <img src = {Unlock}/>
        </div>
        <div className='unlock-body'>
            <div className='unlock-body-content'>
                <div className='unlock-body-content-title'>
                    The unseen of spending three years at Pixelgrade
                </div>
                <div className='unlock-body-content-desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                </div>
            </div>
            <div className='unlock-button'>
                Learn More
            </div>
        </div>
      </div>
      <div className='achievements-container'>
        <div className='achievements-body'>
            <div className='achievements-body-header'>
                    <div>Helping a local</div>
                    <div>business re invent myself</div>
            </div >
            <div className='achievements-body-desc'>
                We reached here with our hard work and dedication
            </div>
        </div>
        <div className='achievements-count'>
            <div className='achievements-count-row'>
                <div className='achievements-count-column'>
                    <div className='achievements-count-logo'>
                        <img src={Icon4} />
                    </div>
                    <div className='achievements-count-details'>
                        <div className='achievements-count-details-number'>
                            2,245,341
                        </div>
                        <div className='achievements-count-details-label'>
                            Members
                        </div>
                    </div>
                </div>
                <div className='achievements-count-column'>
                    <div className='achievements-count-logo'>
                        <img src={Icon5} />
                    </div>
                    <div className='achievements-count-details'>
                        <div className='achievements-count-details-number'>
                            46,328
                        </div>
                        <div className='achievements-count-details-label'>
                            Clubs
                        </div>
                    </div>
                </div>
            </div>
            <div className='achievements-count-row'>
            <div className='achievements-count-column'>
                    <div className='achievements-count-logo'>
                        <img src={Icon6} />
                    </div>
                    <div className='achievements-count-details'>
                        <div className='achievements-count-details-number'>
                            828,867
                        </div>
                        <div className='achievements-count-details-label'>
                            Event Bookings
                        </div>
                    </div>
                </div>
                <div className='achievements-count-column'>
                    <div className='achievements-count-logo'>
                        <img src={Icon7} />
                    </div>
                    <div className='achievements-count-details'>
                        <div className='achievements-count-details-number'>
                            1,926,436
                        </div>
                        <div className='achievements-count-details-label'>
                            Payments
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='calendar-container'>
        <div className='calendar-logo'>
            <img src = {Calendar} />
        </div>
        <div className='calendar-body'>
            <div className='calendar-body-content'>
                <div className='calendar-body-content-title'>
                    How to design your site footer like we did
                </div>
                <div className='calendar-body-content-desc'>
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </div>
            </div>
            <div className='calendar-button'>
                Learn More
            </div>
        </div>
      </div>
      <div className='customers-container'>
        <img src = {Customer} />
        <div className='customers-body'>
            <div className='customers-body-content'>
                <div className='customers-body-content-body'>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </div>
                <div className='customers-body-content-details'>
                    <div className='customers-body-content-details-name'>Tim Smith</div>
                    <div className='customers-body-content-details-org'>British Dragon Boat Racing Association</div>
                </div>
            </div>
            <div className='customers-body-gallery'>
                <div className='customers-body-logos'>
                    <div><img src = {Logo8} /></div>
                    <div><img src = {Logo9} /></div>
                    <div><img src = {Logo10} /></div>
                    <div><img src = {Logo11} /></div>
                    <div><img src = {Logo12} /></div>
                    <div><img src = {Logo13} /></div>
                </div>
                <div className='customers-body-all'>
                    <div className='customers-body-all-body'>
                        Meet All Customers
                    </div>
                    <div><img src ={RightArrow} /></div>
                </div>
            </div>
        </div>
      </div>
      <div className='community-updates-container'>
        <div className='community-updates-body'>
            <div className='community-updates-body-title'>Caring is the new marketing</div>
            <div className='community-updates-body-desc'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</div>
        </div>
        <div className='community-updates-tiles'>
            <div className='community-updates-tile'>
                <img src = {Tile1}/>
                <div className='community-updates-tile-body'>
                    <div className='community-updates-tile-body-desc'>
                        Creating Streamlined Safeguarding Processes with OneRen
                    </div>
                    <div className='community-updates-tile-body-extra'>
                        <div className='community-updates-tile-body-extra-body'>
                            Read More
                        </div>
                        <div><img src ={RightArrow} /></div>
                    </div>
                </div>
            </div>
            <div className='community-updates-tile'>
                <img src = {Tile2}/>
                <div className='community-updates-tile-body'>
                    <div className='community-updates-tile-body-desc'>
                        What are your safeguarding responsibilities and how can you manage them?
                    </div>
                    <div className='community-updates-tile-body-extra'>
                        <div className='community-updates-tile-body-extra-body'>
                            Read More
                        </div>
                        <div><img src ={RightArrow} /></div>
                    </div>
                </div>
            </div>
            <div className='community-updates-tile'>
                <img src = {Tile3}/>
                <div className='community-updates-tile-body'>
                    <div className='community-updates-tile-body-desc'>
                        Revamping the Membership Model with Triathlon Australia
                    </div>
                    <div className='community-updates-tile-body-extra'>
                        <div className='community-updates-tile-body-extra-body'>
                            Read More
                        </div>
                        <div><img src ={RightArrow} /></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Body