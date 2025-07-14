import { Grid } from "@mui/material";
// import { useFormContext } from "react-hook-form";
import CustomTextField from "../../components/formcomponents/CustomTextField";

const SocialFields = () => {
  // const { register } = useFormContext();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Facebook Account"  name="facebookAccount" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Instagram Account" name="instagramAccount" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="LinkedIn Account" name="linkedInAccount" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Dribble Account" name="dribbleAccount" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="Behance Account" name="behanceAccount" />
      </Grid>
     <Grid size={{ xs: 12, sm: 6 }}>
        <CustomTextField label="UI8 Account" name="ui8Account" />
      </Grid>

    </Grid>
  );
};

export default SocialFields;
