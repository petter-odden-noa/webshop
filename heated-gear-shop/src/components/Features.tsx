import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  featuresList: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ featuresList }) => {
  return (
    <section className="features">
      {featuresList.map((feature, index) => (
        <div key={index} className="feature-item">
          <img src={feature.icon} alt={feature.title} className="feature-icon" />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
