import React from 'react';
import MainCard from "../../components/formcomponents/MainCard";
import PricingFields from './PricingFields';

const Pricing: React.FC = () => {
  return (
    <MainCard
      title="Pricing"
    >
      <PricingFields />
    </MainCard>
  );
};

export default Pricing;
