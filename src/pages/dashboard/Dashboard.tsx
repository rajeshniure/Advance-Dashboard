import { Box, Stack } from "@mui/material";
import LineChart from "../../components/charts/LineChart";
import Earning from "../../components/cards/Earning";
import ItemEarning from "../../components/cards/ItemEarning";
import Impression from "../../components/cards/Impression";
import ActiveUser from "../../components/cards/ActiveUser";

function Dashboard() {
  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      {/* Responsive flex: column on mobile, row on desktop */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        alignItems={{ xs: "stretch", md: "flex-start" }}
      >
        {/* LEFT COLUMN */}
        <Stack direction="column" spacing={3} flex={{ xs: "auto", md: 1 }}>
          <ActiveUser />
          <LineChart />
        </Stack>

        {/* RIGHT COLUMN */}
        <Stack spacing={3} justifyContent={"center"}>
        <Stack direction={{xs:"row", md:"column"}} spacing={{xs:1, md:3}} flex={{ xs: "auto", md: 1 }}>
          <Earning />
          <ItemEarning />
        </Stack>
      
          <Impression />
          </Stack>
        
      </Stack>
    </Box>
  );
}

export default Dashboard;
