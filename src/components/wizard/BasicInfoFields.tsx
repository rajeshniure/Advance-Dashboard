import React from "react";
import { Grid } from "@mui/material";
import CustomTextField from "../wizard/CustomTextField";

type Props = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    city: string;
    postalCode: string;
  };
  errors: Record<string, string>;
  handleChange: (field: keyof Props["formData"]) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BasicInfoFields = ({ formData, errors, handleChange }: Props) => {
  return (
    <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="First name"
            value={formData.firstName}
            onChange={handleChange("firstName")}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="Last name"
            value={formData.lastName}
            onChange={handleChange("lastName")}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="Email Address"
            value={formData.email}
            onChange={handleChange("email")}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="Date of Birth"
            value={formData.dob}
            onChange={handleChange("dob")}
            error={!!errors.dob}
            helperText={errors.dob}
            type="date"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="City"
            value={formData.city}
            onChange={handleChange("city")}
            error={!!errors.city}
            helperText={errors.city}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="Postal code"
            value={formData.postalCode}
            onChange={handleChange("postalCode")}
            error={!!errors.postalCode}
            helperText={errors.postalCode}
          />
        </Grid>
    </Grid>
  );
};

export default BasicInfoFields;
