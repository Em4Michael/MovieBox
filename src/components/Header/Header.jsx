import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assest/images/Logo.png';
import Menu from '../../assest/images/Menu alt 4.png';
import IMBD from '../../assest/images/mibd.png';
import Tomato from '../../assest/images/tomato.png';
import Play from '../../assest/images/Play.png';
import useMovieApi from '../../assest/Api/useMovieApi';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error, movies, top10, all } = useMovieApi(searchTerm);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update the search term when the input field changes
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    // Check if the input field is empty and reset the search term
    if (inputValue.trim() === '') {
      setSearchTerm('');
      setIsModalOpen(false);
    }
  };

  return (
    <nav className="cover" style={{ backgroundImage: `url(${require('../../assest/images/johnWick.jfif')})` }}>
      <div className='container'>
        <div className="Left-side">
          <Link to='/'> <img src={Logo} alt="Logo" className="logo" /> </Link>
        </div>
        <div className="Middle-side">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleInputChange}
            className="input"
          />
          {searchTerm && (
            <div className="inputModal">
              {all.map((movie) => (
               <Link to={`/movie/${movie.id}`}> <li key={movie.id}>
                  <>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                      alt="movie-poster"
                      className="Image-display-search"
                    />
                    <div className='movie-name-search'>{movie.title}</div>
                    <div className='movie-release-date'>{movie.release_date}</div>
                  </>
                </li>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="Right-side">
          <Link to='#'> <div className="SignIn" > Sign in </div> </Link>
          <Link to='#'> <div className="Menu" ><img src={Menu} alt="Menu" className="MenuIcon" /></div> </Link>
        </div>
      </div>
      <div className="lower-side">
        <div className="lower-Left-side">
          <span>
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
          </span>
          <span>
            <div className="movie-discription">
              <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            </div>
            <div className="movie-button">
              <button>
                <img src={Play} alt="Play" className="Play" />
                <p>Watch trailer</p>
              </button>
            </div>
          </span>
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
  );
}

export default Header;