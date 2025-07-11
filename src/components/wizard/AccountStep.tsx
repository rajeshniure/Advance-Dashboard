import React from 'react';
import MainCard from "../../components/formcomponents/MainCard";
import AccountFields from "./AccountFields";

const AccountStep: React.FC = () => {
  return (
    <MainCard
      title="What are you doing? (checkboxes)"
      subtitle="Give us more detail about what you're currently doing to improve your skills"
    >
      <AccountFields />
    </MainCard>
  );
};

export default AccountStep;
