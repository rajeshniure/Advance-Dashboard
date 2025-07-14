import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import CustomTextField from "../components/formcomponents/CustomTextField";

const BasicInfoFields = () => {
  const { register } = useFormContext();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="First name" {...register("firstName")} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Last name" {...register("lastName")} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Email Address" {...register("email")} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Date of Birth" type="date" {...register("dob")} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="City" {...register("city")} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Postal code" {...register("postalCode")} />
      </Grid>
    </Grid>
  );
};

export default BasicInfoFields;
