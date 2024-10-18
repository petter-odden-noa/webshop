import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  // Hero props
  const heroProps = {
    backgroundImage: '/path-to-your-hero-image.jpg',
    headline: 'Stay Warm and Comfortable All Winter',
    subheadline: 'Innovative heated jackets for every outdoor adventure',
    ctaText: 'Shop Now',
    ctaLink: '/products',
  };

  // Features props
  const featuresList = [
    {
      icon: '/path-to-icon1.svg',
      title: 'Comfortable Fit',
      description: 'Designed for all-day wear',
    },
    {
      icon: '/path-to-icon2.svg',
      title: 'Stylish Design',
      description: 'Designed for all-day wear',
    },
  ];

  // Product Showcase props
  const showcaseProduct = {
    id: 1,
    name: 'Heated Jacket',
    price: 29.99,
    images: ['/path-to-image1.jpg', '/path-to-image2.jpg', '/path-to-image3.jpg'],
    variants: ['Small', 'Medium', 'Large'],
  };

  // Benefits props
  const benefitsList = [
    {
      image: '/path-to-benefit1.jpg',
      headline: 'Stay Warm',
      text: 'Keep yourself warm and cozy during the cold winter months.',
    },
    {
      image: '/path-to-benefit2.jpg',
      headline: 'Stay Warm',
      text: "Keep yourself warm and cozy during the cold winter months.",
    },
  ];

  // How It Works props
  const howItWorksSteps = [
    {
      number: 1,
      image: '/path-to-step1.jpg',
      description: 'Put on your heated jacket and zip it up.',
    },
    {
      number: 2,
      image: '/path-to-step2.jpg',
      description: 'Locate the power button on the chest area.',
    },
    {
      number: 3,
      image: '/path-to-step3.jpg',
      description: 'Press the power button to cycle through three heat settings: low, medium, and high.',
    },
    {
      number: 4,
      image: '/path-to-step4.jpg',
      description: 'Enjoy customized warmth throughout your outdoor activities.',
    },
  ];

  // Testimonials props
  const testimonialsList = [
    {
      quote: "This heated jacket is a game-changer! I can finally enjoy outdoor activities in cold weather without freezing.",
      name: "Sarah M.",
      image: "/path-to-sarah.jpg",
      rating: 5,
    },
    {
      quote: "Comfortable and effective. I use it for my morning jogs and it keeps me perfectly warm.",
      name: "John D.",
      image: "/path-to-john.jpg",
      rating: 4,
    },
  ];

  // FAQ props
  const faqList = [
    {
      question: "How long do heated jackets last?",
      answer: "With proper care and maintenance, our heated jackets can last up to 5 years or more.",
    },
    {
      question: "Are heated jackets safe to wear?",
      answer: "Yes, our heated jackets are designed with multiple safety features and undergo rigorous testing to ensure they are safe for everyday use.",
    },
    {
      question: "How do I wash my heated jacket?",
      answer: "Most of our heated jackets are machine washable. Always remove the battery pack before washing and follow the care instructions on the label.",
    },
    {
      question: "How long does the battery last?",
      answer: "Battery life varies depending on the heat setting used. On average, you can expect 6-8 hours on low, 4-6 hours on medium, and 2-3 hours on high heat.",
    },
  ];

  return (
    <div className="home">
      <Hero {...heroProps} />
      <Features featuresList={featuresList} />
      <ProductShowcase product={showcaseProduct} />
      <Benefits benefitsList={benefitsList} />
      <HowItWorks steps={howItWorksSteps} />
      <Testimonials testimonials={testimonialsList} />
      <FAQ faqList={faqList} />
    </div>
  );
};

export default Home;
