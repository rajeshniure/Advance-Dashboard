import React from "react";
import {
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import type { UnifiedWizardFormData } from "./schemas";
import { StatsCard } from "../cards/CardComponents";
import usersIcon from "../../assets/image/Users.svg";

const options = [
  { group: "Design", items: ["UI/UX", "Illustration", "Branding"] },
  { group: "Develop", items: ["Frontend", "Backend", "Fullstack"] },
  { group: "Code", items: ["JavaScript", "Python", "C++"] },
];



interface Props {
  formData: UnifiedWizardFormData;
  handleChange: (field: keyof UnifiedWizardFormData) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AccountFields: React.FC<Props> = ({ formData, handleChange }) => {
  const { formState: { errors } } = useFormContext<UnifiedWizardFormData>();
  const handleCardClick = (activity: string) => {
    const isSelected = formData.activities?.includes(activity) || false;
    const fakeEvent = {
      target: {
        value: activity,
        checked: !isSelected,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleChange("activities")(fakeEvent);
  };

  return (
    <Grid container spacing={2}>
      {options.map((group) =>
        group.items.map((activity) => {
          const isChecked = formData.activities?.includes(activity) || false;

          return (
            <Grid size={{ xs: 4}} key={`${group.group}-${activity}`}>
              <Box
                onClick={() => handleCardClick(activity)}
                sx={{
                  cursor: "pointer",
                  border: isChecked ? "2px solid #1976d2" : "2px solid transparent",
                  borderRadius: "8px",
                  transition: "all 0.3s",
                  backgroundColor: isChecked ? "#e3f2fd" : "white",
                  display: "inline-block",
                }}
              >
                <StatsCard
                  value={activity}
                  imageSrc={usersIcon}
                  valueSx={{ fontSize: "1.5rem" }}
                  imgSx={{ width: "40px" }}
                  cardSx={{
                    width: "10rem ",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                />
              </Box>
            </Grid>
          );
        })
      )}

      {errors.activities && (
        <Grid size={{ xs: 12 }}>
          <Typography color="error">{errors.activities.message}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default AccountFields;
