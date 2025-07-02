import { Box } from "@mui/material";
import sidelogo from "../../assets/image/sidelogo.svg";

const SidebarLogo = () => {
  return (
    <Box
      sx={{
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img 
        src={sidelogo} 
        alt="Logo" 
        style={{ 
          maxHeight: '70px',
          maxWidth: '100%'
        }} 
      />
    </Box>
  );
};

export default SidebarLogo; 