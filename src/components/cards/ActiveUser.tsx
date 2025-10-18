import { Stack ,Card,Typography, Box} from "@mui/material"
import MoreStatsCard from "./MoreStatsCard"
import SmallLine from "./SmallLine"
import Barchart from "../charts/Barchart"
import theme from "../../theme"



const ActiveUser = () => {
  return (
    <Card
      sx={{
        pb: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 3, md: 5 },
        backgroundColor: theme.palette.background.default,
        borderRadius: 3,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="body1"
        sx={{ py: { xs: 1, sm: 2 }, fontSize: { xs: "1.2rem", sm: "1.4rem" } }}
      >
        Active users right now
      </Typography>

      {/* Top Charts: SmallLine + BarChart */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, md: 9 }}
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        <Box sx={{ width: { xs: "100%", md: "auto" } }}>
          <SmallLine />
        </Box>
        <Box sx={{ width: { xs: "100%", md: 830 }, mt: { xs: 3, md: 0 } }}>
          <Barchart />
        </Box>
      </Stack>

      {/* Stats Cards */}
      <Box sx={{ mt: { xs: 3, md: 5 } }}>
        <MoreStatsCard />
      </Box>
    </Card>
  );
};

export default ActiveUser;