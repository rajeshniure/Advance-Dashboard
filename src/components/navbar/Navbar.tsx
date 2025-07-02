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
    
      <Toolbar sx={{ 
        display: "flex", 
        position: 'fixed', 
        top: 0,
        left: 280, // Match sidebar width exactly
        right: 0,
        gap: 10,
        backgroundColor:theme.palette.customBackgrounds.background2,
        // borderBottom: `1px solid ${theme.palette.customBackgrounds.border}`,
        zIndex: theme.zIndex.appBar,
        height: 64 // Standard toolbar height
      }}>
        <Typography variant="h6" sx={{color:theme.palette.primary.main}} >
          Dashboard
        </Typography>
        <Box
          sx={{
            position: "relative",
            borderRadius: 3,
            border:1,
            borderColor:theme.palette.grey[400],
            backgroundColor: theme.palette.background.default,  
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
