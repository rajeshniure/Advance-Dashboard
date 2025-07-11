
import { Box, Avatar, Typography, IconButton,Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import person from "../../assets/image/Frame 1149.svg"

const ProfileSection = () => (
  <Box display="flex" alignItems="center" gap={2} mb={3}>
    <Box position="relative">
      <Avatar
        src={person}
        sx={{ width: 64, height: 64 }}
      />
      <IconButton
        size="small"
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          bgcolor: 'white',
          boxShadow: 1,
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    </Box>
    <Stack direction={"column"}>
    <Typography variant='h6'>Profile Name</Typography>
    <Typography variant="body2" color="text.secondary">
      This will be displayed on your profile.
    </Typography>
    </Stack>
  </Box>
);

export default ProfileSection;
