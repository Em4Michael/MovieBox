import React from 'react'
import './MainView.css'
import play from '../../assest/images/Play (1).png'
import Star from '../../assest/images//Star.png'
import List from '../../assest/images/List (1).png'
import List2 from '../../assest/images/List.png'
import Ticket from '../../assest/images/Two Tickets.png'

function MainView() {

    return (
        <div className='Movie-view' >
            <div
                className='Movie-Trailer'
                style={{ backgroundImage: `url(${require('../../assest/images/triller.jfif')})` }}
            >

                <div className="play-wrapperg">
                    <img src={play} alt="triller-Logo" className="play-logo" />
                </div>
                <span> Watch Trailer </span>

            </div>
            <div className='Movie-view-bottom' >
                <div className='Movie-view-left' >
                    <div className='Movie-view-left-title-wrapper'>
                        <div className='Movie-view-left-title'>

                            <p data-testid='movie-title' >Top Gun: Maverick </p> •
                            <p data-testid='movie-release-date'> 2022 </p> •
                            <p> PG-13 </p>•
                            <p data-testid='movie-runtime'>2h 10m</p>

                        </div>
                        <div className='Movie-view-left-cat'>
                            <span> Action </span>
                            <span> Drama </span>
                        </div>
                    </div>

                    <div id='movie-overview'>
                        <p data-testid='movie-overview'>
                            After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                            but must confront ghosts of his past when he leads TOP GUN's elite graduates
                            on a mission that demands the ultimate sacrifice from those chosen to fly it.
                        </p>
                    </div>
                    <div className='Movie-view-left-title-info' >
                        <span>
                            Director : <span className='color-danger'>Joseph Kosinski</span>
                        </span>
                        <span>
                            Writers : <span className='color-danger'>Jim Cash, Jack Epps Jr, Peter Craig</span>
                        </span>
                        <span>
                        Stars : <span className='color-danger'>  Tom Cruise, Jennifer Connelly, Miles Teller</span>
                        </span>
                    </div>
                    <div className='Movie-view-left-top-rate' >
                        <button className='Movie-btn'>
                            Top rated movie #65
                        </button>
                        <span className='Movie-btn2'>
                            Awards 9 nominations
                        </span>
                    </div>
                </div>
                <div className='Movie-view-right' >
                    <div className='Movie-view-right-top' >
                        <div className='Movie-view-right-top-rating' >
                            <span> <img src={Star} alt="icon" className="icon" /></span> <span>8.5 | 350k</span>
                        </div>
                        <button className='Movie-btn' >
                            <img src={Ticket} alt="icon" className="icon" /> <spa> See Showtimes</spa>
                        </button>
                        <button className='Movie-btn3' >
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
    )
}

export default MainView