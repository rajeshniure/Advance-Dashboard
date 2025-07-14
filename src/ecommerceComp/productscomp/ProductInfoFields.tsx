import { Grid } from "@mui/material";
// import { useFormContext } from "react-hook-form";
import CustomTextField from "../../components/formcomponents/CustomTextField";

const ProductInfoFields = () => {
  // const { register } = useFormContext();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Name" name="name" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Weight" name="weight" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Sizes" name="sizes" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Category" name="category" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Description" name="description" />
      </Grid>

    </Grid>
  );
};

export default ProductInfoFields;
