import React from 'react';
import MainCard from "../../components/formcomponents/MainCard";
import ProfileSection from "../../components/formcomponents/ProfileSection";
import BasicInfoFields from "./BasicInfoFields";

const BasicInfoStep: React.FC = () => {
  return (
    <MainCard
      title="Let's start with the basic information"
      subtitle="Let us know your name and email address. Use an address you don't mind other users contacting you at"
    >
      <ProfileSection />
      <BasicInfoFields />
    </MainCard>
  );
};

export default BasicInfoStep;
