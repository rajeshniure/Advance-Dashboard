import { useState } from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';

import {
  IconButton,
  InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CustomInputField = ({
  type,
  label,
  placeholder,
  ...props
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <TextField
      label={label}
      type={isPassword ? (showPassword ? 'text' : 'password') : type}
      placeholder={placeholder}
      variant="outlined"
       slotProps={{
        input: {
          endAdornment: isPassword && (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};

export default CustomInputField;
