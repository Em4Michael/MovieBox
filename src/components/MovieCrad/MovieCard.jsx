import React from 'react'
import { Link } from 'react-router-dom';
import './MovieCard.css'
import batman from '../../assest/images/55bc9e1a21c68b2b31a33af82b284df6.jfif'
import Heart from '../../assest/images/Heart.png'
import IMBD from '../../assest/images/mibd.png'
import Tomato from '../../assest/images/tomato.png'

function MovieCard() {
  return (

    <div className='card-container' data-testid='movie-card'>
      <Link to='/Movies'><div className='image-card'>
        <img src={batman} alt="movie-poster" className="Image-display" data-testid='movie-poster' />
        <div className='Image-nav' >
          <div className='movie-type' >
            Tv Series
          </div>
          <div className='favourite' >
            <img src={Heart} alt="Heart" className="Heart" />
          </div>
        </div>
        <div className='Image-info' >
          <div className='movie-date' >
            <span> USA,</span> <div data-testid='data-testid: movie-release-date'>2016 - Current</div>
          </div>
          <div className='movie-name' data-testid='movie-title'>
            Stranger Things
          </div>
          <div className="movie-card-rating">
            <div className="movie-card-rating-imbd">
              <img src={IMBD} alt="IMBD" className="IMBD" /> <p>86.0 / 100</p>
            </div>
            <div className="movie-card-rating-tomato">
              <img src={Tomato} alt="movie-card-Tomato" className="movie-card-Tomato" /> <p>90%</p>
            </div>
          </div>
          <div className='movie-genre' >
            Action, Adventure, Drama
          </div>
        </div>
      </div>
      </Link>
    </div>

  )
}

export default MovieCard