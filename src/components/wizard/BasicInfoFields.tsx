import React from "react";
import { Grid } from "@mui/material";
import CustomTextField from "../wizard/CustomTextField";
// import type { FieldErrors } from "react-hook-form";
import type { UnifiedWizardFormData } from "./schemas";

type Props = {
  formData: UnifiedWizardFormData;
  // errors: FieldErrors<UnifiedWizardFormData>;
  handleChange: (field: keyof UnifiedWizardFormData) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BasicInfoFields = ({ handleChange }: Props) => {
  return (
    <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            name="firstName"
            label="First name"
            fullWidth
            onChange={handleChange("firstName")}
            // error={!!errors.firstName}
            // helperText={errors.firstName?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            name="lastName"
            label="Last name"
            fullWidth
            onChange={handleChange("lastName")}
            // error={!!errors.lastName}
            // helperText={errors.lastName?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            name="email"
            label="Email Address"
            fullWidth
            onChange={handleChange("email")}
            // error={!!errors.email}
            // helperText={errors.email?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            name="dob"
            label="Date of Birth"
            fullWidth
            onChange={handleChange("dob")}
            // error={!!errors.dob}
            // helperText={errors.dob?.message}
            type="date"
  
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            name="city"
            label="City"
            fullWidth
            onChange={handleChange("city")}
            // error={!!errors.city}
            // helperText={errors.city?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            name="postalCode"
            label="Postal code"
            fullWidth
            onChange={handleChange("postalCode")}
            // error={!!errors.postalCode}
            // helperText={errors.postalCode?.message}
          />
        </Grid>
    </Grid>
  );
};

export default BasicInfoFields;
