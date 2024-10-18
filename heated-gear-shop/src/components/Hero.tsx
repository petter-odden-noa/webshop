import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  backgroundImage: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage, headline, subheadline, ctaText, ctaLink }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1>{headline}</h1>
        <p>{subheadline}</p>
        <Link to={ctaLink} className="cta-button">{ctaText}</Link>
      </div>
    </section>
  );
};

export default Hero;
