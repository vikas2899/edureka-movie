import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import service from '../../axios/service';
import './MovieDetail.css';

function MovieDetail() {
  const { movieID } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchMovieById = async () => {
    setIsLoading(true);
    try {
      const res = await service.get(`/movies/${movieID}`);
      setData(res?.data);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovieById();
  }, []);

  return (
    <div className='moviedt__container'>
      <h4 className='moviedt__title'>Movie Details</h4>
      <div className='moviedt__wrapper'>
        <div className='moviedt__image__container'>
          <img src={data?.img} alt='movie poster' className='moviedt__image' />
        </div>
        {!isLoading ? (
          <div className='moviedt__details'>
            <p>Name : {data.title}</p>
            <p>Genre : {data.genre}</p>
            <p>Director : {data.director}</p>
            <button
              className='moviedt__book'
              onClick={() => navigate(`/book/movie/${movieID}`)}
            >
              Book Now
            </button>
          </div>
        ) : (
          <div>Loading...</div>
        )}
        {isError && (
          <div>Something went wrong while fetching movie details</div>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
