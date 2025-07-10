
import { Grid } from "@mui/material";
// import type { FieldErrors } from "react-hook-form";
import type { UnifiedWizardFormData } from "./schemas";
import CustomTextField from "./CustomTextField";

interface Props {
  formData: UnifiedWizardFormData;
  // errors: FieldErrors<UnifiedWizardFormData>;
  handleChange: (field: keyof UnifiedWizardFormData) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressInfoFields: React.FC<Props> = ({  handleChange }) => {
  return (
    <Grid container spacing={2} mt={2}>
      <Grid size={{xs:6}}>
        <CustomTextField
          name="street"
          label="Street"
          fullWidth
          onChange={handleChange("street")}
          // error={!!errors.street}
          // helperText={errors.street?.message}
        />
      </Grid>
      <Grid size={{xs:6}}>
        <CustomTextField
         name="postal"
          label="Postal"
          fullWidth
          onChange={handleChange("postal")}
          // error={!!errors.postal}
          // helperText={errors.postal?.message}
        />
      </Grid>
      <Grid size={{xs:6}}>
        <CustomTextField
          name="addressCity"
          label="City"
          fullWidth
          onChange={handleChange("addressCity")}
          // error={!!errors.addressCity}
          // helperText={errors.addressCity?.message}
        />
      </Grid>
      <Grid size={{xs:6}}>
        <CustomTextField
          name="country"
          label="Country"
          fullWidth
          onChange={handleChange("country")}
          // error={!!errors.country}
          // helperText={errors.country?.message}
        >
        </CustomTextField>
      </Grid>
    </Grid>
  );
};

export default AddressInfoFields;
