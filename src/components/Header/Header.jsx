import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../../assest/images/Logo.png'
import Menu from '../../assest/images/Menu alt 4.png'
import IMBD from '../../assest/images/mibd.png'
import Tomato from '../../assest/images/tomato.png'
import Play from '../../assest/images/Play.png'
import cover from '../../assest/images/johnWick.jfif'

function Header() {


  return (
    <nav>
      <img src={cover} alt="cover" className="cover" />
      <div className='container'>

        <div className="Left-side">
          <Link to='/'> <img src={Logo} alt="Logo" className="logo" />  </Link>
        </div>

        <div className="Middle-side">
          <input placeholder='What do you want to watch?' className="input" />
        </div>

        <div className="Right-side">
          <Link to='#'> <div className="SignIn" > Sign in </div> </Link>
          <Link to='#'> <div className="Menu" ><img src={Menu} alt="Menu" /></div> </Link>
        </div>

      </div>

      <div className="lower-side">
        <div className="lower-Left-side">
          <div className="header-movie-name">
            John Wick 3 : Parabellum
          </div>
          <div className="movie-rating">
            <div className="movie-rating-imbd">
              <img src={IMBD} alt="IMBD" className="IMBD" /> <p>86.0 / 100</p>
            </div>
            <div className="movie-rating-tomato">
              <img src={Tomato} alt="Tomato" className="Tomato" /> <p>90%</p>
            </div>
          </div>
          <div className="movie-discription">
            <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          </div>
          <div className="movie-button">
            <button>
              <img src={Play} alt="Play" className="Play" />
              <p>Watch trailer</p>
            </button>
          </div>
        </div>
        <div className="lower-Right-side">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>

      </div>
    </nav>
  )
}

export default Header