import React from 'react';
import SideBar from '../components/SideBar/SideBar'
import MainView from '../components/MainView/MainView';
import { useParams } from 'react-router-dom';

function Movies() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
console.log("id", id)
  // Now you can use the 'id' in your component logic
  return (
    <div className='movie-container'>
    <SideBar />
    <MainView />
    </div>
    
  );
}

export default Movies;
