import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
}

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='poster_row'>
        {movies.map((movie) => (
          ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <div>
              <img
              className={`poster ${isLargeRow && 'large_poster'}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              key={movie.id}
              alt={movie.title}
            />
            <p class='row_title'>{movie?.title || movie?.name || movie?.original_name}</p>
            <p class='row_description'>{truncate(movie?.overview, 80)}</p>
            </div>  
          )
        ))}  
      </div>
      
    </div>
  );
}

export default Row;
