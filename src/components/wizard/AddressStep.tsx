import React from 'react';
import MainCard from "../../components/formcomponents/MainCard";
import AddressInfoFields from "./AddressInfoFields";

const AddressStep: React.FC = () => {
  return (
    <MainCard
      title="Are you living in nice area?"
      subtitle="One thing I love about the later sunsets is the chance to go for a walk through the neighborhood woods before dinner"
    >
      <AddressInfoFields />
    </MainCard>
  );
};

export default AddressStep;
