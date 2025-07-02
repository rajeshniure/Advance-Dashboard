import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material';

type CustomButtonProps = {
  label: string; 
} & ButtonProps; 

const CustomButton = ({ label, ...rest }: CustomButtonProps) => {
  return <Button {...rest}>{label}</Button>;
};

export default CustomButton; 