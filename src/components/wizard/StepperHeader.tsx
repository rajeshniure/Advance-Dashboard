// components/wizard/StepperHeader.tsx
import { Stepper, Step, StepLabel, Box } from "@mui/material";

const steps = ["About", "Account", "Address"];

const StepperHeader = ({ activeStep }: { activeStep: number }) => (
  <Box sx={{margin:"auto",width:"50%" }}>
    <Stepper activeStep={activeStep} >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
);

export default StepperHeader;
