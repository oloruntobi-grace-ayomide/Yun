import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    id: 1,
    clientName: '- Grace P., Entrepreneur',
    description: '"Yun Capital\'s disciplined approach gave me confidence in my investments. Their focus on impact is inspiring."',
  },
  {
    id: 2,
    clientName: '- Jack W., CEO',
    description: '"The team\'s expertise and personalized service made all the difference. I trust them with my financial future."',
  },
  {
    id: 3,
    clientName: '- Charles B., Retiree',
    description: '"Yun Capital\'s disciplined approach gave me confidence in my investments. Their focus on impact is inspiring."',
  },
  {
    id: 4,
    clientName: '- Water W., CEO',
    description: '"The team\'s expertise and personalized service made all the difference. I trust them with my financial future."',
  },
  {
    id: 5,
    clientName: '- Ocean M., Business Man',
    description: '"Yun Capital\'s disciplined approach gave me confidence in my investments. Their focus on impact is inspiring."',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(slides.length / 2));
  const intervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  // Function to start the interval
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
  };

  // Start the interval on mount
  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Pause + resume mechanism
  const handleUserInteraction = (action) => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    // Clear any existing resume timeout
    clearTimeout(resumeTimeoutRef.current);

    // Execute navigation
    action();

    // Resume auto-slide after 2 minutes of no interaction
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 120000); 
  };

  const goToPrev = () => {
    handleUserInteraction(() =>
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      )
    );
  };

  const goToNext = () => {
    handleUserInteraction(() =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    );
  };

  return (
    <div className='carousel-container'>
        <div className='slide-wrapper'>
        {slides.map((slide, index) => {
                    let slideClass = 'slide';
                    if (index === currentIndex) {
                        slideClass += ' current';
                    } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                        slideClass += ' prev';
                    } else if (index === (currentIndex + 1) % slides.length) {
                        slideClass += ' next';
                    }
                    return (
                        <div className={slideClass} key={slide.id} aria-hidden={index !== currentIndex}>
                          <p>{slide.description}</p>
                          <h4 className='client-name'>{slide.clientName}</h4>
                        </div>
                    );
                })}
        
            <div className='slide-marker'>
                <div className="control-div">
                  <button className='control-button' onClick={goToPrev}  aria-label="Previous Slide">&#10094;</button>
                  <p>
                  {slides.map((_, index) => (
                    
                      <span key={index} style={{ padding: '5px', color: currentIndex === index ? '#03539c' : 'gray' }}>&bull;</span>
                  ))}
                  </p>
                  <button className='control-button' onClick={goToNext}  aria-label="Next Slide">&#10095;</button>
                </div>
            </div>
        </div>
      
    </div>
  );
};



export default Carousel;
