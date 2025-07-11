import React from 'react';
import MainCard from "../../formcomponents/MainCard";
import SocialFields from './SocialFields';

const Social: React.FC = () => {
  return (
    <MainCard
      title="Social"
    >
      <SocialFields />
    </MainCard>
  );
};

export default Social;
