import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './MovieCard.css'
import { MovieDetails } from './MovieDetails';
import batman from '../../assest/images/55bc9e1a21c68b2b31a33af82b284df6.jfif'
import Heart from '../../assest/images/Heart.png'
import IMBD from '../../assest/images/mibd.png'
import Tomato from '../../assest/images/tomato.png'
import axios from 'axios';
import useMovieApi from '../../assest/Api/useMovieApi'

function MovieCard() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log('clicked')
  };





  const { data, loading, error, top10 } = useMovieApi();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }



  return (
    <>
      {top10.map((movie) => (

        <div className='card-container' data-testid='movie-card' key={movie.id}>
          <div className='image-card'>
            <Link to='/Movies'>
              <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path
                }`} alt="movie-poster" className="Image-display" data-testid='movie-poster' />
            </Link>
            <div className='Image-nav' >
              <div className='movie-type' >
                {movie.movieType}
              </div>
              <div className={isFavorite ? 'active' : 'favorite'}>
                <img src={Heart} alt="Heart" className="Heart" onClick={toggleFavorite} />
              </div>
            </div>
            <div className='Image-info' >
              <div className='movie-date' >
                <span> {movie.realseCountry},</span> <div data-testid='data-testid: movie-release-date'>{movie.release_date}</div>
              </div>
              <div className='movie-name' data-testid='movie-title'>
                {movie.title}
              </div>
              <div className="movie-card-rating">
                <div className="movie-card-rating-imbd">
                  <img src={IMBD} alt="IMBD" className="IMBD" /> <p>{movie.popularity}</p>
                </div>
                <div className="movie-card-rating-tomato">
                  <img src={Tomato} alt="movie-card-Tomato" className="movie-card-Tomato" /> <p>{movie.vote_average}</p>
                </div>
              </div>
              <div className='movie-genre' >
                {movie.original_language}
              </div>
              <div className='movie-genre' >
                {movie.vote_count}
              </div>
            </div>
          </div>

        </div>
      ))}
    </>
  )
}

export default MovieCard