import React from 'react';

interface Benefit {
  image: string;
  headline: string;
  text: string;
}

interface BenefitsProps {
  benefitsList: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({ benefitsList }) => {
  return (
    <section className="benefits">
      {benefitsList.map((benefit, index) => (
        <div key={index} className="benefit-item">
          <img src={benefit.image} alt={benefit.headline} />
          <div className="benefit-content">
            <h3>{benefit.headline}</h3>
            <p>{benefit.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
