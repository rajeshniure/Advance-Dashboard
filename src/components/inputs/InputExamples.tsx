import { Stack } from "@mui/material";
import CustomTextField from "./CustomTextField";

function InputExamples() {
  return (
    <Stack spacing={4} padding={4}>
      <CustomTextField
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      <CustomTextField
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <CustomTextField
        label="Name"
        type="text"
        placeholder="Enter your name"
      />
    </Stack>
  );
}

export default InputExamples; 