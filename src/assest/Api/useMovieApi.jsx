import { useEffect, useState } from 'react';
import axios from 'axios';

const useMovieApi = (search) => {
  
  const apiKey = 'e0fdcc3687db83f3bf4a938787e50a42';
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
  const apiUrlAll = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&include_adult=false&language=en-US&page=1`;

  


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [top10, setTop10] = useState([]);
  const [all, setAll] = useState([]);
  


  useEffect(() => {
    const fetchData = async () => {

      try {

        const AllResponse = await axios.get(apiUrlAll);
        if (AllResponse.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const AllData = AllResponse.data.results;
        setAll(AllData);

      


        const Top10response = await axios.get(apiUrl);
        if (Top10response.status !== 200) {
          throw new Error('Network response was not ok');
        }

        const Top10jsonData = Top10response.data;

        const jsonData = Top10response.data;

        setData(jsonData);

        const topTen = Top10jsonData.results
        setTop10(topTen);

        console.log("Top10sortedMovies", topTen);
        console.log("AllData", AllData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, apiUrlAll ]);

  return { data, loading, error, movies, top10, all };
};

export default useMovieApi;
