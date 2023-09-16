import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Menu from '../../assest/images/Menu alt 4.png';
import IMBD from '../../assest/images/mibd.png';
import Tomato from '../../assest/images/tomato.png';
import Play from '../../assest/images/Play.png';
import useMovieApi from '../../assest/Api/useMovieApi';
import Tv from '../../assest/images/tv.png';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const { all, top10, loading, error } = useMovieApi(searchTerm);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavDark, setIsNavDark] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [randomImageIndex, setRandomImageIndex] = useState(0);

  // Function to generate a random index within the top10 range
  const generateRandomIndex = () => {
    return Math.floor(Math.random() * top10.length);
  };

  // Function to change the random image after 5 seconds
  const changeRandomImage = () => {
    const newIndex = generateRandomIndex();
    setRandomImageIndex(newIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsNavDark(true);
      } else {
        setIsNavDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    // Delay showing details for 5 seconds after fetching the image data
    const delayToShowDetails = setTimeout(() => {
      setShowDetails(true);
    }, 5000);

    // Change the random image every 5 seconds
    const interval = setInterval(changeRandomImage, 5000);

    // Clear the timeout and interval when the component unmounts or when searchTerm changes
    return () => {
      clearTimeout(delayToShowDetails);
      clearInterval(interval);
    };
  }, [all, searchTerm]);

  // Function to get the URL of the currently selected random image
  const getRandomImageURL = () => {
    const randomMovie = top10[randomImageIndex];
    if (randomMovie) {
      return `https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path || randomMovie.poster_path}`;
    }
    return '';
  };

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
    <>
     <nav className={`nav ${isNavDark ? 'dark' : ''}`}>
        <div className='container'>
          <div className="Left-side">
            <Link to='/'> <div className='logo-container-Home'> <img src={Tv} alt="Logo" className="tv-logo-Home" /> <span className="logo-name-Home">MovieBox </span> </div> </Link>
          </div>
          <div className="Middle-side">
            <input
              type="text"
              placeholder="What do you want to watch?"
              value={searchTerm}
              onChange={handleInputChange}
              className="input"
            />
            {searchTerm && (
              <div className="inputModal">
                {all.map((movie) => (
                  <Link to={`/movies/${movie.id}`} key={movie.id}>
                    <li>
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
      </nav>

      <div
        className="cover"
        style={{
          backgroundImage: `url(${getRandomImageURL()})`,
        }}
      >
        {showDetails && !loading && !error && (
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
             {/* Loader */}
        {loading && (
          <div className="loader-container">
            <div className="circular-loader"></div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="error-message">
            <p>Error: {error.message}</p>
          </div>
        )}
          </div>
          <div className="lower-Right-side">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
        </div>

        )}
      </div>
    </>
  );
}

export default Header;
