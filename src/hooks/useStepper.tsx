import { useState } from 'react';

interface UseStepperReturn {
  activeStep: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  nextStep: () => void;
  previousStep: () => void;
  setActiveStep: (step: number) => void;
}

export const useStepper = (totalSteps: number): UseStepperReturn => {
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = activeStep === totalSteps - 1;
  const isFirstStep = activeStep === 0;

  const nextStep = () => {
    if (!isLastStep) {
      setActiveStep(prev => prev + 1);
    }
  };

  const previousStep = () => {
    if (!isFirstStep) {
      setActiveStep(prev => prev - 1);
    }
  };

  return {
    activeStep,
    isLastStep,
    isFirstStep,
    nextStep,
    previousStep,
    setActiveStep,
  };
}; 