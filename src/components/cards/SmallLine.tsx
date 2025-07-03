import Vectoreline from "../../assets/image/Vector 126.png";
import pages from "../../assets/image/pages.svg";
import { Typography, Box, Stack } from '@mui/material';

const SmallLine = () => {
  return (
    <>
      <Box>
      <Stack direction="column" spacing={1.7} sx={{ mb: "3rem",mt:"2rem", width:"12rem" }} >
        <Stack >
        <Typography variant="h1" sx={{ color: "primary.main", fontSize: "5rem" }} >
          300
        </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <img src={pages} alt="" width="60px"/>
          <Typography variant="h6" sx={{ fontSize: "1rem" }} >
          Pages views per minutes
          </Typography>
        </Stack>
      </Stack>
      <Stack borderTop={1} width="12rem" sx={{ borderColor: "grey.400", pt: "0.5rem" }}>
        <Stack
          sx={{
            position: 'relative',
            right: '1.4rem',
            height: '6rem',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <img src={Vectoreline} alt="" width="250px" />
        </Stack>
        <Typography variant="h5" sx={{ fontSize: "1rem" }}>
          Upgrade your payout method in setting
        </Typography>
      </Stack>
      </Box>
     
    </>
  );
};

export default SmallLine;

