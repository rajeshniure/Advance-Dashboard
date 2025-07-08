// components/wizard/AddressInfoFields.tsx
import { Grid } from "@mui/material";
import type { FieldErrors } from "react-hook-form";
import type { UnifiedWizardFormData } from "./schemas";
import CustomTextField from "./CustomTextField";

interface Props {
  formData: UnifiedWizardFormData;
  errors: FieldErrors<UnifiedWizardFormData>;
  handleChange: (field: keyof UnifiedWizardFormData) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressInfoFields: React.FC<Props> = ({ formData, errors, handleChange }) => {
  return (
    <Grid container spacing={2} mt={2}>
      <Grid size={{xs:6}}>
        <CustomTextField
          label="Street"
          fullWidth
          value={formData.street}
          onChange={handleChange("street")}
          error={!!errors.street}
          helperText={errors.street?.message}
        />
      </Grid>
      <Grid size={{xs:6}}>
        <CustomTextField
          label="Postal"
          fullWidth
          value={formData.postal}
          onChange={handleChange("postal")}
          error={!!errors.postal}
          helperText={errors.postal?.message}
        />
      </Grid>
      <Grid size={{xs:6}}>
        <CustomTextField
          label="City"
          fullWidth
          value={formData.addressCity}
          onChange={handleChange("addressCity")}
          error={!!errors.addressCity}
          helperText={errors.addressCity?.message}
        />
      </Grid>
      <Grid size={{xs:6}}>
        <CustomTextField
          label="Country"
          fullWidth
          value={formData.country}
          onChange={handleChange("country")}
          error={!!errors.country}
          helperText={errors.country?.message}
        >
        </CustomTextField>
      </Grid>
    </Grid>
  );
};

export default AddressInfoFields;
