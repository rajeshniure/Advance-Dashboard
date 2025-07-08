import React from "react";
import { Grid } from "@mui/material";
import CustomTextField from "../wizard/CustomTextField";
import type { FieldErrors } from "react-hook-form";
import type { UnifiedWizardFormData } from "./schemas";

type Props = {
  formData: UnifiedWizardFormData;
  errors: FieldErrors<UnifiedWizardFormData>;
  handleChange: (field: keyof UnifiedWizardFormData) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BasicInfoFields = ({ formData, errors, handleChange }: Props) => {
  return (
    <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="First name"
            fullWidth
            value={formData.firstName}
            onChange={handleChange("firstName")}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="Last name"
            fullWidth
            value={formData.lastName}
            onChange={handleChange("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="Email Address"
            fullWidth
            value={formData.email}
            onChange={handleChange("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="Date of Birth"
            fullWidth
            value={formData.dob}
            onChange={handleChange("dob")}
            error={!!errors.dob}
            helperText={errors.dob?.message}
            type="date"
  
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="City"
            fullWidth
            value={formData.city}
            onChange={handleChange("city")}
            error={!!errors.city}
            helperText={errors.city?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="Postal code"
            fullWidth
            value={formData.postalCode}
            onChange={handleChange("postalCode")}
            error={!!errors.postalCode}
            helperText={errors.postalCode?.message}
          />
        </Grid>
    </Grid>
  );
};

export default BasicInfoFields;
