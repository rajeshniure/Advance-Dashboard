import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import MainCard from "../wizard/MainCard";
import ProfileSection from "../wizard/ProfileSection";
import CustomTextField from "../wizard/CustomTextField";

import { z } from "zod";

const schema = z.object({
  firstName: z
    .string()
    .nonempty("First name is required")
    .max(50, "First name cannot be longer than 50 characters")
    .regex(/^[A-Za-z]+$/, "First name must contain only letters"),

  lastName: z
    .string()
    .nonempty("Last name is required")
    .max(50, "Last name cannot be longer than 50 characters")
    .regex(/^[A-Za-z]+$/, "Last name must contain only letters"),

  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),

  dob: z
    .string()
    .nonempty("Date of birth is required")
    .refine(
      (val) => {
        const date = new Date(val);
        return !isNaN(date.getTime());
      },
      {
        message: "Invalid date format. Use YYYY-MM-DD",
      }
    ),

  city: z
    .string()
    .nonempty("City is required")
    .max(100, "City cannot be longer than 100 characters")
    .regex(/^[A-Za-z\s]+$/, "City name must contain only letters and spaces"),

  postalCode: z
    .string()
    .nonempty("Postal code is required")
    .max(10, "Postal code must not exceed 10 characters")
    .regex(/^\d{4,10}$/, "Postal code must be numeric and 4 to 10 digits long"),
});

const BasicInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

const handleChange =
  (field: keyof typeof formData) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });

    // Validate the single field in real-time
    try {
      schema.pick({ [field]: true } as Record<keyof typeof formData, true>).parse({ [field]: value });
      setErrors((prev) => ({ ...prev, [field]: "" }));
    } catch (err: any) {
      setErrors((prev) => ({
        ...prev,
        [field]: err.errors?.[0]?.message || "",
      }));
    }
  };

  const handleSubmit = () => {
    const result = schema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    console.log("✔ Valid data:", result.data);
  };

  return (
    <MainCard
      title="Let’s start with the basic information"
      subtitle="Let us know your name and email address. Use an address you dont mind other users contact you at"
    >
      <ProfileSection />
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
        <Grid size={{ xs: 12 }} display="flex" justifyContent="flex-end" mt={2}>
          <Button
            variant="contained"
            sx={{ borderRadius: 2, px: 4 }}
            onClick={handleSubmit}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default BasicInfoForm;
