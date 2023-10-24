import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import Recommended from '../../components/Recommended/Recommended';

import './Home.css';

function Home() {
  return (
    <div className='home__container'>
      <div className='home__header'>
        <Link className='home__card' to='/latest'>
          Lastest Movies
        </Link>
        <div className='home__card'>Upcoming Movies</div>
        <div className='home__card'>Nearby Events</div>
      </div>
      <div className='home__slider'>
        <Slider />
      </div>
      <div className='home__movies'>
        <Recommended />
      </div>
    </div>
  );
}

export default Home;
