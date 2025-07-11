
import { Stepper, Step, StepLabel, Box } from "@mui/material";
import type { stepsTypes } from "../../components/stepform/HookStepForm";


const StepperHeader = ({ activeStep,steps }: { activeStep: number,steps:stepsTypes[] }) => (
  <Box sx={{mx:"auto",width:"45%", mb: 6 }}>
    <Stepper activeStep={activeStep} >
       {steps.map((step) => <Step key={step.label}>
          <StepLabel>{step.label}</StepLabel>
        </Step>)}
    </Stepper>
  </Box>
);

export default StepperHeader;
