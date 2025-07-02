import { Box, Typography, useTheme, Divider } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import anita from "../../assets/image/anita.svg";

const UserProfile = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ p: 2 }}>
      <Divider sx={{ mb: 2, borderColor: theme.palette.customBackgrounds.border }} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          p: 2,
          borderRadius: 3,
          backgroundColor: theme.palette.primary.main,
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            transform: 'translateY(-1px)',
            boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
          },
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <img 
            src={anita} 
            alt="Profile" 
            style={{ 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }} 
          />
        </Box>
        <Box sx={{ textAlign: 'left', flex: 1 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: theme.palette.common.white,
              fontSize: '14px',
            }}
          >
            Anita Cruz
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '12px',
            }}
          >
            anita@ecommerce.com
          </Typography>
        </Box>
        <MoreVertIcon
          sx={{
            color: theme.palette.common.white,
            fontSize: '20px',
            opacity: 0.8,
            transition: 'opacity 0.2s ease-in-out',
            '&:hover': {
              opacity: 1,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default UserProfile; 