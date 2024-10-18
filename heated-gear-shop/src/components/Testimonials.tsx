import React, { useState } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  image: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-carousel">
        <button onClick={prevTestimonial} className="carousel-button prev">&lt;</button>
        <div className="testimonial-content">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
          <p className="quote">{testimonials[currentIndex].quote}</p>
          <p className="name">{testimonials[currentIndex].name}</p>
          <div className="rating">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
        </div>
        <button onClick={nextTestimonial} className="carousel-button next">&gt;</button>
      </div>
    </section>
  );
};

export default Testimonials;
