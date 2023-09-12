import React, { useState } from 'react';
import './sideBar.css'
import { Link } from 'react-router-dom';
import Logo from '../../assest/images/Logo.png'
import Home from '../../assest/images/Home.png'
import Movies from '../../assest/images/Movie Projector.png'
import TvShow from '../../assest/images/TV Show.png'
import Calendar from '../../assest/images/Calendar.png'
import Logout from '../../assest/images/Logout.png'
import Tv from '../../assest/images/tv.png'

function SideBar() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <>
      <div className='sideBar'>
        <Link to='/'><div className='logo-container'> <img src={Tv} alt="Logo" className="tv-logo" /> <span className="logo-name-sideBar">MovieBox </span> </div> </Link>
        <div className='sideBar-item'>

          <div className='Movie-item'>
            <span className={activeItem === 'Home' ? 'active' : ''}
              onClick={() => handleItemClick('Home')}>
              <span>
                <img src={Home} alt="Home" className="side-logo" />
                <span className='item-name'> Home </span>
              </span>
            </span>

          </div>
          <div className='Movie-item'>
            <span className={activeItem === 'Movies' ? 'active' : ''}
              onClick={() => handleItemClick('Movies')}>
              <span>
                <img src={Movies} alt="Movies" className="side-logo" />
                <span className='item-name'> Movies </span>
              </span>
            </span>

          </div>
          <div className='Movie-item'>
            <span className={activeItem === 'Tv Series' ? 'active' : ''}
              onClick={() => handleItemClick('Tv Series')}>
              <span>
                <img src={TvShow} alt="TvShow" className="side-logo" />
                <span className='item-name'> Tv Series </span>
              </span>
            </span>

          </div>
          <div className='Movie-item'>
            <span className={activeItem === 'Upcoming' ? 'active' : ''}
              onClick={() => handleItemClick('Upcoming')}>
              <span>
                <img src={Calendar} alt="Calendar" className="side-logo" />
                <span className='item-name'> Upcoming </span>
              </span>
            </span>

          </div>
          <div className='message-item'>
            <span className='message-info'> Play movie quizes and earn free tickets </span>
            <span className='message-description'> 50k people are playing now</span>
            <span className='message-button'>Start playing </span>
          </div>
          <div className='Movie-item'>
            <span className={activeItem === 'Logout' ? 'active' : ''}
              onClick={() => handleItemClick('Logout')}>
              <span>
                <img src={Logout} alt="Logout" className="side-logo logout" />
                <span className='item-name'> Logout </span>
              </span>
            </span>

          </div>
        </div>
      </div>

    </>
  )
}

export default SideBar