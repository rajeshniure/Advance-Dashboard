import { TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

type CustomTextFieldProps = {
  label: string;
  name: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
};

const CustomTextField = ({
  label,
  name,
  type,
  onChange,
  fullWidth = true,
}: CustomTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];
  const isError = !!fieldError;

  return (
    <>
      <Typography variant="body2" color="text.primary" mb={1}>
        {label}
      </Typography>
      <TextField
        {...register(name)}
        name={name}
        placeholder={label}
        onChange={onChange}
        fullWidth={fullWidth}
        variant="outlined"
        size="small"
        error={isError}
        type={type}
      />
      {isError && (
        <Typography variant="caption" color="error" mt={0.5}>
          {fieldError?.message as string}
        </Typography>
      )}
    </>
  );
};

export default CustomTextField;
