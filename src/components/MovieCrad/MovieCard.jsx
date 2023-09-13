import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './MovieCard.css'
import { MovieDetails } from './MovieDetails';
import batman from '../../assest/images/55bc9e1a21c68b2b31a33af82b284df6.jfif'
import Heart from '../../assest/images/Heart.png'
import IMBD from '../../assest/images/mibd.png'
import Tomato from '../../assest/images/tomato.png'
import axios from 'axios';

function MovieCard() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your TMDb API key
    const apiKey = 'e0fdcc3687db83f3bf4a938787e50a42';
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
    
    axios.get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
    {movies.map((movie) => (
      
       
      
    
    <div className='card-container' data-testid='movie-card' key={movie.id}>
      <Link to='/Movies'><div className='image-card'>
        <img src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`} alt="movie-poster" className="Image-display" data-testid='movie-poster' />
        <div className='Image-nav' >
          <div className='movie-type' >
          {movie.movieType}
          </div>
          <div className='favourite' >
            <img src={Heart} alt="Heart" className="Heart" />
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
        </div>
      </div>
      </Link>
    </div>
))}
</>
  )
}

export default MovieCard