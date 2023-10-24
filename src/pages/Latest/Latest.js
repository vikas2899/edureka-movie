import React, { useState, useEffect } from 'react';
import service from '../../axios/service';
import Card from '../../components/Card/Card';
import './Latest.css';

function Latest() {
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
    <div className='latest__container'>
      <h4 className='latest__title'>Latest Movies</h4>
      {!isLoading ? (
        <div className='latest__wrapper'>
          {data?.map((movie) => (
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

export default Latest;
