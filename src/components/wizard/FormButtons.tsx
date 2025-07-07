import { Grid, Button } from "@mui/material";

type Props = {
    label: string;
  handleNext?: () => void;
  handleSubmit?: () => void
};

const FormButtons = ({ handleNext, label,handleSubmit }: Props) => {
  return (
    <Grid size={{ xs: 12 }} display="flex" justifyContent="flex-end" mt={2}>
      <Button
        variant="contained"
        sx={{ borderRadius: 2, px: 4 }}
        onClick={handleNext || handleSubmit}
      >
        {label}
      </Button>
    </Grid>
  );
};

export default FormButtons;
