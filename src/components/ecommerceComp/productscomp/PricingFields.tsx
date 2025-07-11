import { Grid } from "@mui/material";
// import { useFormContext } from "react-hook-form";
import CustomTextField from "../../formcomponents/CustomTextField";

const PricingFields = () => {
  // const { register } = useFormContext();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField type="number" label="Price" name="price" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Currency" name="currency" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="SKU" name="sku" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Tags" name="tags" />
      </Grid>
    </Grid>
  );
};

export default PricingFields;
