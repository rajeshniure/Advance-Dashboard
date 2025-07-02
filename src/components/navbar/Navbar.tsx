import {
  Toolbar,
  Typography,
  InputBase,
  Box,
  useTheme
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const theme = useTheme();
  return (
    
      <Toolbar sx={{ display: "flex", position:'absolute', left:'20rem' ,gap:10 }}>
        <Typography variant="h6" sx={{color:theme.palette.primary.main}} >
          Dashboard
        </Typography>
        <Box
          sx={{
            position: "relative",
            borderRadius: 3,
            border:1,
            borderColor:theme.palette.grey[400],
            width: { xs: "100%", sm: "auto" },
            display: "flex",
            alignItems: "center",
            px: 1,
          }}
        >
          <InputBase
            placeholder="Search anything here..."
            sx={{ width: 200 }}
          />
          <SearchIcon sx={{ color: "action.active", mr: 1 }} />
        </Box>
      </Toolbar>
  );
};

export default Navbar;
