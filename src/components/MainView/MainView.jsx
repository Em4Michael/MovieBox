import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MainView.css';
import play from '../../assest/images/Play (1).png';
import Star from '../../assest/images/Star.png';
import List from '../../assest/images/List (1).png';
import List2 from '../../assest/images/List.png';
import Ticket from '../../assest/images/Two Tickets.png';
import useIdApi from '../../assest/Api/useIdApi';

function MainView() {
    const { id } = useParams(); // Get the 'id' parameter from the URL
    const { allId, loading, error } = useIdApi(id); // Use your custom hook to fetch data

    useEffect(() => {
        // You can perform additional actions here when 'allId' changes
        // For example, update the document title or trigger other side effects
        document.title = `Movie Details: ${allId.title}`;
    }, [allId]);

    if (loading) {
        return <div className="loader-container">
        <div className="circular-loader"></div>
      </div>
    }
    if (error) {

        return  <div className="error-container">
        <p>Error: {error.message}</p>
    </div>;
    }

    return (
        <>
            <div className='Movie-view'>
                <div
                    className='Movie-Trailer'
                    style={{
                        backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${allId.backdrop_path || allId.poster_path
                            }`})`
                    }}
                >
                    <div className="play-wrapper">
                        <img src={play} alt="triller-Logo" className="play-logo" />
                        <span> Watch Trailer </span>
                    </div>

                </div>
                <div className='Movie-view-bottom'>
                    <div className='Movie-view-left'>
                        <div className='Movie-view-left-title-wrapper'>
                            <div className='Movie-view-left-title'>
                                <p data-testid='movie-title'>{allId.title}•</p>
                                <p data-testid='movie-release-date'>{allId.release_date}</p> 
                            </div>
                            <p data-testid='movie-runtime'>{allId.runtime}m</p>
                            <div className='Movie-view-left-cat'>
                                {allId.genres.map((genre) => (
                                    <span key={genre.id}>{genre.name}</span>
                                ))}
                            </div>
                        </div>
                        <div id='movie-overview'>
                            <p data-testid='movie-overview'>{allId.overview}</p>
                        </div>
                        <div className='Movie-view-left-title-info'>
                            <span>
                                Director : <span className='color-danger'>{allId.director || 'Joseph Kosinski'}</span>
                            </span>
                            <span>
                                Writers : <span className='color-danger'>{allId.writers || 'Jim Cash, Jack Epps Jr, Peter Craig'}</span>
                            </span>
                            <span>
                                Stars : <span className='color-danger'>{allId.stars || 'Tom Cruise, Jennifer Connelly, Miles Teller'}</span>
                            </span>
                        </div>
                        <div className='Movie-view-left-top-rate'>
                            <button className='Movie-btn'>
                                Top rated movie #{allId.rank}
                            </button>
                            <span className='Movie-btn2'>
                                Awards {allId.awards} nominations
                            </span>
                        </div>
                    </div>
                    <div className='Movie-view-right'>
                        <div className='Movie-view-right-top'>
                            <div className='Movie-view-right-top-rating'>
                                <span>
                                    <img src={Star} alt="icon" className="icon" />
                                </span>
                                <span>
                                    {allId.vote_average.toFixed(1)} | {allId.votes} {allId.vote_count.toFixed(0)}
                                </span>
                            </div>
                            <button className='Movie-btn'>
                                <img src={Ticket} alt="icon" className="icon" /> <span> See Showtimes</span>
                            </button>
                            <button className='Movie-btn3'>
                                <img src={List} alt="icon" className="icon" />
                                <span> More watch options</span>
                            </button>
                        </div>
                        <div
                            className='Movie-view-right-bottom'
                            style={{ backgroundImage: `url(${require('../../assest/images/116ee4b17ae77fa058f95de8e6b7cf2e.jfif')})` }}
                        >
                            <span>
                                <img src={List2} alt="icon" className="icon" />
                                <p> The Best Movies and Shows in September</p>
                            </span>
                        </div>

                    </div>

                </div>

            </div>


        </>
    );
}

export default MainView;
