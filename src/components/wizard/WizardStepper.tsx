import { Box, Step, StepLabel, Stepper } from '@mui/material';
import theme from '../../theme';


const steps = [
  'About',
  'Account',
  'Address',
];

interface WizardStepperProps {
  activeStep: number;
  onStepClick: (step: number) => void;
}

const WizardStepper: React.FC<WizardStepperProps> = ({ activeStep, onStepClick }) => {
  return (
    <Box sx={{ width: '100%', background: theme.palette.customBackgrounds.background2, py: 3}}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
            onClick={() => onStepClick(index)}
              sx={{
                '& .MuiStepIcon-root': {
                  color: activeStep === index ? '#6C3AD7' : '#D1B6F7',
                  fontWeight: 700,
                },
                '& .MuiStepLabel-label': {
                  color: activeStep === index ? '#6C3AD7' : '#D1B6F7',
                  fontWeight: activeStep === index ? 700 : 500,
                  fontSize: 22,
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default WizardStepper;
