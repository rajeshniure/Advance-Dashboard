import React from "react";
import { Grid } from "@mui/material";
import CustomTextField from "../wizard/CustomTextField";

type Props = {
  formData: {
    streetname: string;
    streetno: string;
    city: string;
    country: string;
 
  };
  errors: Record<string, string>;
  handleChange: (field: keyof Props["formData"]) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BasicInfoFields = ({ formData, errors, handleChange }: Props) => {
  return (
    <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="Street name"
            value={formData.streetname}
            onChange={handleChange("streetname")}
            error={!!errors.streetname}
            helperText={errors.streetname}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <CustomTextField
            label="Street no"
            value={formData.streetno}
            onChange={handleChange("streetno")}
            error={!!errors.streetno}
            helperText={errors.streetno}
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
            label="Country"
            value={formData.country}
            onChange={handleChange("country")}
            error={!!errors.country}
            helperText={errors.country}
          />
        </Grid>

    </Grid>
  );
};

export default BasicInfoFields;
