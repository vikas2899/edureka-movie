import React, { useRef, useState } from 'react';
import './Slider.css';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef();

  const sliderData = [
    {
      id: '1',
      imageUrl: 'https://cdn.europosters.eu/image/hp/80594.jpg',
    },
    {
      id: '2',
      imageUrl:
        'https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/d/m/t/large-newposter9449-designs-tv-show-breaking-bad-walter-white-original-imaf5tjfegvzyhz9.jpeg?q=20',
    },
  ];

  const NO_OF_SLIDES = sliderData.length;

  const handleSlideChange = (type) => {
    let localSlide = currentSlide;
    if (type === 'left') {
      localSlide--;
      if (localSlide < 1) {
        localSlide = NO_OF_SLIDES;
      }
    } else if (type === 'right') {
      localSlide++;
      if (localSlide > NO_OF_SLIDES) {
        localSlide = 1;
      }
    }
    setCurrentSlide(localSlide);
    slideRef.current.style.translate = `${(localSlide - 1) * -100}vw`;
  };

  return (
    <div className='slider__container'>
      <div ref={slideRef} className='slider__wrapper'>
        {sliderData &&
          sliderData.map((slide) => (
            <div className='slider__img__container' key={slide.id}>
              <div
                className='slider__img'
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
              ></div>
            </div>
          ))}
      </div>
      <button
        className='slider__btn'
        style={{ left: 0 }}
        onClick={() => handleSlideChange('left')}
      >
        ⬅️
      </button>
      <button
        className='slider__btn'
        style={{ right: 0 }}
        onClick={() => handleSlideChange('right')}
      >
        ➡️
      </button>
    </div>
  );
}

export default Slider;
