
import { Stepper, Step, StepLabel, Box } from "@mui/material";
import type { stepsTypes } from "../../components/stepform/HookStepForm";


const StepperHeader = ({ activeStep,steps }: { activeStep: number,steps:stepsTypes[] }) => (
  <Box sx={{
      mx: "auto",
      width: { xs: "100%", sm: "80%", md: "60%", lg: "45%" },
      mb: { xs: 3, md: 6 },
      px: { xs: 2, md: 0 },
      overflowX: { xs: "auto", md: "visible" },
    }}>
    <Stepper activeStep={activeStep} >
       {steps.map((step) => <Step key={step.label}>
          <StepLabel>{step.label}</StepLabel>
        </Step>)}
    </Stepper>
  </Box>
);

export default StepperHeader;
