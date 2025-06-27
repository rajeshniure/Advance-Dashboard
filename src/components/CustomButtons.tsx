
import  Button  from '@mui/material/Button';
import type { ButtonProps } from '@mui/material';

type CustomProps = {
  label: string; 
} & ButtonProps; 

const CustomButtons = ({ label, ...rest }: CustomProps) => {
  return <Button {...rest}>{label}</Button>;
};

export default CustomButtons;