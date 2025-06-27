
import CustomButton from "./CustomButtons";
import { Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PushPinIcon from "@mui/icons-material/PushPin";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import AddRoundedIcon from "@mui/icons-material/AddRounded";



function Buttons() {
  return (
    <>
      <Stack spacing={4} padding={4}>
        <CustomButton label="BlockButton" size="large" />

        <Stack direction="row" spacing={5}>
          <CustomButton label="Buttton" />

          <CustomButton label="small" size="small" />
        </Stack>

        <Stack direction="row" spacing={5}>
          <CustomButton label="Button" variant="text" />

          <CustomButton label="Button" size="small" variant="outlined" />
        </Stack>

        <Stack direction="row" spacing={5}>
          <CustomButton
            label="Button"
            variant="text"
            endIcon={<ExpandMoreIcon />}
            size="small"
          />

          <CustomButton
            label="Button"
            startIcon={<PushPinIcon />}
            size="small"
            variant="text"
          />
        </Stack>

        <Stack direction="row" sx={{ width: "185px" }}>
          <CustomButton
            label="Text"
            variant="outlined"
            startIcon={<MenuIcon />}
            sx={{ borderTopRightRadius: "0", borderBottomRightRadius: "0" }}
          />
          <CustomButton
            label="Text"
            startIcon={<MenuIcon />}
            variant="contained"
            sx={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
          />
        </Stack>

        <Stack direction="row" spacing={5}>
          <CustomButton label="Buttton" variant="outlined" />

          <CustomButton
            label="Add Friend"
            endIcon={<PersonIcon />}
            size="medium"
            variant="outlined"
            sx={{ height: "32px", width: "113px", fontSize: "0.7rem" }}
          />
        </Stack>

        <Stack direction="row" spacing={5}>
          <CustomButton
            label="9.7%"
            variant="text"
            size="small"
            sx={{ backgroundColor: "#F6B44599", borderRadius: "30px" }}
          />

          <CustomButton
            label="Showing your Activity"
            size="small"
            variant="outlined"
            sx={{ border: "#89868D solid 1px", width: "151px", color: "gray" }}
          />
        </Stack>

        <CustomButton
          label=""
          variant="outlined"
          size="large"
          startIcon={<AddRoundedIcon />}
          sx={{ border: "#89868D Dashed 2px", color: "gray" }}
        />

        <CustomButton
          label="Today"
          variant="text"
          size="small"
          sx={{ backgroundColor: "#EEE4FF", borderRadius: "8px" }}
        />
      </Stack>

    </>
  );
}

export default Buttons;
