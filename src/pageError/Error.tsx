import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function NotFound404() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bgcolor="#f5f5f5"
      px={2}
    >
      <ErrorOutlineIcon color="error" sx={{ fontSize: 120, mb: 2 }} />
      <Typography variant="h2" fontWeight="bold" color="error">
        404
      </Typography>
      <Typography variant="h5" mb={2}>
        Page Not Found
      </Typography>
      <Typography variant="body1" mb={4}>
        The page you are looking for is comming soon.
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        size="large"
      >
        Go Back Home
      </Button>
    </Box>
  );
}

export default NotFound404;
