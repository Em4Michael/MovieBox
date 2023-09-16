import { useEffect, useState } from 'react';
import axios from 'axios';

function useIdApi(id) {
  const apiKey = 'e0fdcc3687db83f3bf4a938787e50a42';
  const apiUrlDisplay = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

  const [allId, setAllId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    let isMounted = true;

    const fetchData = async () => {
      try {

        const AllResponseId = await axios.get(apiUrlDisplay);

        if (!isMounted) {
          return; // If the component unmounted, do not update state
        }


        //const AllResponseId = await axios.get(apiUrlDisplay);
        if (AllResponseId.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const AllDataId = AllResponseId.data; // Assuming you want to get details for a specific movie
        setAllId(AllDataId);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [apiUrlDisplay]);

  return { allId, loading, error };
}

export default useIdApi;
