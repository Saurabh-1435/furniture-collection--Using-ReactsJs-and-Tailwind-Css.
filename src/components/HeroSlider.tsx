
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: 'Modern Furniture Collection',
    description: 'Upgrade your home with our stylish modern furniture pieces.',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6',
    buttonText: 'Shop Now',
    buttonLink: '/products'
  },
  {
    id: 2,
    title: 'Spring Sale',
    description: 'Up to 40% off on selected items. Limited time offer.',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2',
    buttonText: 'View Offers',
    buttonLink: '/products'
  },
  {
    id: 3,
    title: 'New Arrivals',
    description: 'Discover our latest furniture pieces for your home.',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353',
    buttonText: 'Explore',
    buttonLink: '/products'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-8 animate-fade-in">
                {slide.description}
              </p>
              <Button asChild className="bg-furniture-primary hover:bg-furniture-secondary shadow-lg animate-fade-in">
                <Link to={slide.buttonLink}>{slide.buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
