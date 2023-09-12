import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Movies from './Pages/Movies'


function App() {
  return (
    <Router>
    
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Movies' element={<Movies />} />
      </Routes>
    </>
  </Router>
  );
}

export default App;
