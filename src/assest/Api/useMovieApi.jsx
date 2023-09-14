import { useEffect, useState } from 'react';
import axios from 'axios';

const useMovieApi = () => {
  const apiKey = 'e0fdcc3687db83f3bf4a938787e50a42';
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
  const apiUrlUnsorted = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1`;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [top10, setTop10] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(apiUrl);
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const jsonData = response.data;
        
        setData(jsonData);

        const sortedMovies = jsonData.results.sort((a, b) => b.vote_count - a.vote_count);


        const Top10response = await axios.get(apiUrl);
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const Top10jsonData = Top10response.data;
        
        const topTen = Top10jsonData.results.sort((a, b) => b.vote_count - a.vote_count);
        topTen.length = 10;
        setTop10(topTen);

        setMovies(sortedMovies);
        setTop10(topTen);
        console.log("sortedMovies", sortedMovies);
        console.log("Top10sortedMovies", topTen);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [ apiUrl, apiUrlUnsorted ]);

  return { data, loading, error, movies, top10 };
};

export default useMovieApi;
