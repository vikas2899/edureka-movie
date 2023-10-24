import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ movie }) {
  const navigate = useNavigate();
  return (
    <div key={movie.id} className='rm__movie__card'>
      <span className='movie__title'>{movie.title}</span>
      <button
        className='book__btn'
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        Book
      </button>
    </div>
  );
}

export default Card;
