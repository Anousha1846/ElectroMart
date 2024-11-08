"use client"
import Image from 'next/image';
import { useState } from 'react';
import slide1 from '../../public/images/slide1.webp';
import slider2 from '../../public/images/slider2.jpg';
import slide3 from '../../public/images/slide3.jpeg';

export default function FullScreenCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide3, slider2, slide1];

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className="carousel">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <Image src={slide} alt={`Slide ${index + 1}`} layout="fill"  quality={100}  style={{ objectFit: 'cover' }}  />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      
    </div>
  );
}
