import { TextField, Typography } from "@mui/material";

type CustomTextFieldProps = {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  type?: string;
  
};

const CustomTextField = ({
  label,
  value,
  onChange,
  fullWidth = true,
  error,
  helperText,
  type,
}: CustomTextFieldProps) => (
  <>
    <Typography variant="body2" color="text.primary" mb={1}>
      {label}
    </Typography>
    <TextField
      placeholder={label}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      variant="outlined"
      size="small"
      error={error}
      helperText={helperText}
      type={type}
    />
  </>
);

export default CustomTextField;