import { Grid, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { useFormContext } from "react-hook-form";
import type { UnifiedWizardFormData } from "./schemas";
import { StatsCard } from "../cards/CardComponents";
import usersIcon from "../../assets/image/Users.svg";

const activities = [
  "UI/UX",
  "Illustration",
  "Branding",
  "Frontend",
  "Backend",
  "Fullstack",
  "JavaScript",
  "Python",
  "C++",
];

const AccountFields = () => {
    const {
      register,
      formState: { errors },
      watch,
    } = useFormContext<UnifiedWizardFormData>();

    const selectedActivities = watch("activities") || [];

  return (
    <Grid container spacing={2}>
      {activities.map((activity) => {
        const isChecked = selectedActivities.includes(activity);

        return (
          <Grid size={{ xs: 4 }} key={activity}>
            <FormControlLabel
              control={
                <Checkbox
                  {...register("activities")}
                  value={activity}
                  checked={isChecked}
                  sx={{ display: "none" }}
   
                />
              }
              label={
                <StatsCard
                  value={activity}
                  imageSrc={usersIcon}
                  valueSx={{ fontSize: "1.5rem" }}
                  imgSx={{ width: "40px" }}
                  cardSx={{
                    width: "11.5rem",
                    cursor: "pointer",
                    backgroundColor: isChecked ? "#e3f2fd" : "white",
                    border: isChecked
                      ? "2px solid #1976d2"
                      : "2px solid transparent",
                    borderRadius: "8px",
                  }}
                />
              }
              sx={{ width: "100%", margin: 0 }}
            />
          </Grid>
        );
      })}

      {errors.activities && (
        <Grid size={{ xs: 12 }}>
          <Typography color="error">{errors.activities.message}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default AccountFields;
