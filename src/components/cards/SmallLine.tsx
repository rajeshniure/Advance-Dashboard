import Vectoreline from "../../assets/image/Vector 126.png";
import pages from "../../assets/image/pages.svg";
import { Typography, Box, Stack } from '@mui/material';

const SmallLine = () => {
  return (
    <>
      <Box>
      <Stack direction="column" spacing={1.7} sx={{ mb: "1rem", width:"8rem" }} >
        <Stack >
        <Typography variant="h1" sx={{ color: "primary.main", fontSize: "3rem" }} >
          300
        </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <img src={pages} alt="" />
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }} >
          Pages views per minutes
          </Typography>
        </Stack>
      </Stack>
      <Stack borderTop={1} width="8rem" sx={{ borderColor: "grey.400", pt: "0.5rem" }}>
        <Stack
          sx={{
            position: 'relative',
            right: '1.4rem',
            height: '4rem',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <img src={Vectoreline} alt="" width="150px" />
        </Stack>
        <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
          Upgrade your payout method in setting
        </Typography>
      </Stack>
      </Box>
     
    </>
  );
};

export default SmallLine;

