import { Button, Box } from "@mui/material";

type Props = {
  label: string;
  handleSubmit: () => void;
  handleBack?: () => void;
};

const FormButtons: React.FC<Props> = ({ label, handleSubmit, handleBack }) => {
  return (
    <Box textAlign="right" mt={3}>
      {handleBack && (
        <Button onClick={handleBack} sx={{ mr: 2 }}>
          Back
        </Button>
      )}
      <Button type="submit" variant="contained" onClick={handleSubmit}>
        {label}
      </Button>
    </Box>
  );
};

export default FormButtons;
