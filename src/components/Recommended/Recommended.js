import React, { useEffect, useState } from 'react';
import service from '../../axios/service';
import Card from '../Card/Card';

import './Recommended.css';

function Recommended() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const res = await service.get('/movies');
      setData(res?.data);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='rm__container'>
      <h4>Recommended Movies</h4>
      {!isLoading ? (
        <div className='rm__wrapper'>
          {data?.slice(0, 4).map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {isError && <div>Something went wrong while fetching movies</div>}
    </div>
  );
}

export default Recommended;
