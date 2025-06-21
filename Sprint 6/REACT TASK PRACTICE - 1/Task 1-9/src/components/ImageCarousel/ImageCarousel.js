import React, { useState } from 'react';
import './ImageCarousel.css';

// Import your images (replace with your actual image paths)
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

const ImageCarousel = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <h2>Image Carousel</h2>
      <div className="carousel">
        <button onClick={prevImage} className="nav-button prev">
          &lt;
        </button>
        
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className="carousel-image"
        />
        
        <button onClick={nextImage} className="nav-button next">
          &gt;
        </button>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span 
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;