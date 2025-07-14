import { ZodError, ZodSchema } from 'zod';
import { Box, Button } from '@mui/material';
import {  FormProvider, type FieldValues, type UseFormReturn } from 'react-hook-form';
import { ArrowBackRounded, ArrowForwardRounded } from '@mui/icons-material';

import SubmitButton from '../formcomponents/SubmitButton';
import StepperHeader from '../../components/formcomponents/StepperHeader';
import { useStepper } from '../../hooks/useStepper';


export type stepsTypes={
  element:React.ReactNode,
  schema:ZodSchema,
  label:string

}

export interface HookStepProps {
  methods:UseFormReturn<any>
  handleFormSubmit:(data: any) => void;
  isSubmitting: boolean,
  steps: stepsTypes[],
}


const HookStepForm = ({methods,handleFormSubmit,isSubmitting,steps}: HookStepProps ) => {
const{handleSubmit, getValues, setError}=methods

  const { activeStep, isLastStep, nextStep, previousStep, isFirstStep } = useStepper(steps.length);

  const handleNext = async () => {
    try {
      console.log(steps[activeStep].schema)
   await steps[activeStep].schema.parseAsync(getValues());
   
      nextStep();
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((e) => {
          setError(e.path.join('.') as keyof FieldValues, { message: e.message });
        });
      }
    }
  };
  
const CurrentStep = steps[activeStep].element;
  return (
    <>
    <StepperHeader activeStep={activeStep} steps={steps} />
    <Box sx={{ padding: "24px", maxWidth: "650px", margin: "0 auto" ,backgroundColor: 'white' }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Box mb="24px">
           {CurrentStep}
          </Box>
          <Box display="flex" justifyContent="flex-end" gap="16px">
            {!isFirstStep && (
              <Button variant="outlined" onClick={previousStep} startIcon={<ArrowBackRounded />} disabled={isSubmitting}>
                Back
              </Button>
            )}
            {isLastStep ? (
              <SubmitButton isLoading={isSubmitting} />
            ) : (
              <Button variant="contained" onClick={handleNext} endIcon={<ArrowForwardRounded />} disabled={isSubmitting}>
                Next
              </Button>
            )}
          </Box>
        </form>
      </FormProvider>
    </Box>
    </>
  );
}

export default HookStepForm;