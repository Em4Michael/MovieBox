import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import Heart from '../../assest/images/Heart.png';
import IMBD from '../../assest/images/mibd.png';
import Tomato from '../../assest/images/tomato.png';
import useMovieApi from '../../assest/Api/useMovieApi';

function MovieCard({ movieId }) {
  const [favoriteStates, setFavoriteStates] = useState(() => {
    // Initialize favoriteStates from local storage, or an empty object if not found
    const storedFavorites = localStorage.getItem('favoriteStates');
    return storedFavorites ? JSON.parse(storedFavorites) : {};
  });

  const toggleFavorite = (movieId) => {
    setFavoriteStates((prevState) => ({
      ...prevState,
      [movieId]: !prevState[movieId], // Toggle the favorite state for the clicked movie
    }));
    console.log('clicked');
  };

  // Use useEffect to save favoriteStates to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('favoriteStates', JSON.stringify(favoriteStates));
  }, [favoriteStates]);

  const { data, loading, error, top10, all, genres } = useMovieApi();

  if (loading) {
    return <div className="loader-container">
    <div className="circular-loader"></div>
  </div>
  }

  if (error) {
    return<div className="error-container">
    <p>Error: {error.message}</p>
</div>;;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <>
      {top10.map((movie) => (
        <div className='card-container' data-testid='movie-card' key={movie.id}>
          <div className='image-card'>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                alt="movie-poster"
                className="Image-display"
                data-testid='movie-poster'
              />
            </Link>
            <div className='Image-nav'>
            <div className='movie-type'>{movie.movieType ? movie.movieType : 'Movie'}</div>
              <div className={favoriteStates[movie.id] ? 'active' : 'favorite'}>
                <img src={Heart} alt="Heart" className="Heart" onClick={() => toggleFavorite(movie.id)} />
              </div>
            </div>
            <div className='Image-info'>
              <div className='movie-date'>
                <div className='movie-genre'>
                  {movie.original_language}
                </div><div data-testid='movie-release-date'>{movie.release_date}</div>
              </div>
              <div className='movie-name' data-testid='movie-title'>
                {movie.title}
              </div>
              <div className="movie-card-rating">
                <div className="movie-card-rating-imbd">
                  <img src={IMBD} alt="IMBD" className="IMBD" /> <p>{movie.popularity.toFixed(0)}/100</p>
                </div>
                <div className="movie-card-rating-tomato">
                  <img src={Tomato} alt="movie-card-Tomato" className="movie-card-Tomato" /> <p>{movie.popularity.toFixed(1)}%</p>
                </div>

              </div>

              <div className='movie-genre'>
                {movie.genre_ids.map((genreId) => {
                  const genre = genres.find((g) => g.id === genreId);
                  return genre ? genre.name : '';
                }).join(', ')}
              </div>
            </div>
          </div>
        </div>
      ))}
  

    </>
  );
}

export default MovieCard;
