import {
  Toolbar,
  Typography,
  InputBase,
  Box,
  useTheme,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

type NavbarProps = {
  title: string;
  onMenuClick?: () => void;
};

const Navbar = ({ title, onMenuClick }: NavbarProps) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Toolbar
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        width: "100%",
        backgroundColor: theme.palette.customBackgrounds?.background2 || "transparent",
        borderBottom: `1px solid ${theme.palette.customBackgrounds?.border || "transparent"}`,
        px: { xs: 1, sm: 2 },
      }}
    >
      {/* Hamburger shown on xs only */}
      {!isSmUp && onMenuClick ? (
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick} sx={{ mr: 1 }}>
          <MenuIcon />
        </IconButton>
      ) : null}

      <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
        {title}
      </Typography>
      <Box
        sx={{
          marginLeft: "auto",
          position: "relative",
          borderRadius: 3,
          border: 1,
          borderColor: theme.palette.grey[400],
          backgroundColor: theme.palette.background.default,
          width: { xs: "100%", sm: 300 },
          maxWidth: 400,
          display: "flex",
          alignItems: "center",
          px: 1,
        }}
      >
        <InputBase placeholder="Search anything here..." sx={{ width: "100%" }} />
        <SearchIcon sx={{ color: "action.active", ml: 1 }} />
      </Box>
    </Toolbar>
  );
};

export default Navbar;
