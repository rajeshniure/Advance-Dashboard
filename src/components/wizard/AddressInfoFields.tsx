
import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import CustomTextField from "../../components/formcomponents/CustomTextField";

const AddressInfoFields = () => {
  const { register } = useFormContext();

  return (
    <Grid container spacing={2} mt={2}>
      <Grid size={{xs:6}}>
        <CustomTextField label="Street" {...register("street")} />
      </Grid>
      <Grid size={{xs:6}}>
        <CustomTextField label="Postal" {...register("postal")} />
      </Grid>
      <Grid size={{xs:6}}>
        <CustomTextField label="City" {...register("addressCity")} />
      </Grid>
      <Grid size={{xs:6}}>
        <CustomTextField label="Country" {...register("country")} />
      </Grid>
    </Grid>
  );
};

export default AddressInfoFields;
