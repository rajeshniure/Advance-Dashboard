import Vectoreline from "/assets/image/VectorLine.png";
import pages from "/assets/image/pages.svg";
import { Typography, Box, Stack } from '@mui/material';

const SmallLine = () => {
  return (
    <Box display="flex" flexDirection={{ xs: "row", md: "column" }} gap={{ xs: 2, md: 5 }}>
      
      {/* Stats Section */}
      <Stack
        spacing={2}
        width={{ xs: "100%", md: "12rem" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        textAlign={{ xs: "center", md: "left" }}
      >
        <Typography variant="h1" color="primary.main" fontSize={{ xs: "3rem", md: "5rem" }}>
          300
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={pages} alt="Pages" width="60px" />
          <Typography variant="h6" fontSize={{xs: "0.9rem", md: "1rem"}}>
            Pages views per minutes
          </Typography>
        </Stack>
      </Stack>


      <Stack borderTop={1} borderColor="grey.400" pt={{md:"0.5rem"}} width={{ xs: "100%", md: "12rem" }}>
        <Box position="relative" right="1.4rem" height={{xs:"4.7rem", md:"6rem"}}>
          <img src={Vectoreline} alt="Vector Line" width="250px" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </Box>
        <Typography variant="h5" fontSize={{ xs: "0.9rem", md: "1rem" }}>
          Upgrade your payout method in setting
        </Typography>
      </Stack>

    </Box>
  );
};

export default SmallLine;
