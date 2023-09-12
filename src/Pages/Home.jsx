import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MovieCard from '../components/MovieCrad/MovieCard'
import Icon from '../assest/images/Icon.png'
function Home() {
    return (
        <>
            <Header />
            <main>
                <div className='movie-nav'>
                    <div className='featured-movie'>
                        <span>Featured Movie</span>
                    </div>

                    <div className='see-more'>
                        <span> See more</span>
                        <img src={Icon} alt="Icon" className="Icon" />
                    </div>
                </div>
                <div className='cards-holder'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home