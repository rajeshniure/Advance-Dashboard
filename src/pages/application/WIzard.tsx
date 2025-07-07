import { Box, } from '@mui/material'
import BasicInfoForm from '../../components/wizard/BasicInfoForm'
import AccountStep from '../../components/wizard/AccountStep'
import AddressStep from '../../components/wizard/AddressStep'
import WizardStepper from '../../components/wizard/WizardStepper'
import  { useState } from 'react';


const Wizard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
  setActiveStep((prev) => prev + 1);
};

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <BasicInfoForm handleNext={handleNext}/>;
      case 1:
        return <AccountStep handleNext={handleNext} />;
      case 2:
        return <AddressStep />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <WizardStepper activeStep={activeStep} onStepClick={setActiveStep} />
      {renderStepContent(activeStep)}
    </Box>
  );
};

export default Wizard;