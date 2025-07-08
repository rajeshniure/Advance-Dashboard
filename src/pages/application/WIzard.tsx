// components/wizard/Wizard.tsx
import { useState } from "react";
import { Box } from "@mui/material";
import StepperHeader from "../../components/wizard/StepperHeader";
import BasicInfoStep from "../../components/wizard/BasicInfoStep";
import AccountStep from "../../components/wizard/AccountStep";
import AddressStep from "../../components/wizard/AddressStep";
import { useUnifiedWizardForm } from "../../components/wizard/hooks/useUnifiedWizardForm";

const Wizard = () => {
  const [step, setStep] = useState(0);
  const formHook = useUnifiedWizardForm();

  const handleNext = async () => {
    const isStepValid = await formHook.validateStep(step);
    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleFinalSubmit = () => {
    formHook.handleSubmit();
  };

  return (
    <Box sx={{ p: 4 }}>
      <StepperHeader activeStep={step} />
      {step === 0 && (
        <BasicInfoStep 
          onNext={handleNext} 
          formHook={formHook}
        />
      )}
      {step === 1 && (
        <AccountStep 
          onNext={handleNext} 
          onBack={handleBack} 
          formHook={formHook}
        />
      )}
      {step === 2 && (
        <AddressStep 
          onBack={handleBack}
          onSubmit={handleFinalSubmit}
          formHook={formHook}
        />
      )}
    </Box>
  );
};

export default Wizard;
