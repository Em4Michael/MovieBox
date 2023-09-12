import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import MainView from '../components/MainView/MainView'

function Movies() {
  return (
    <div className='movie-container'>
    <SideBar />
    <MainView />
    </div>
  )
}

export default Movies