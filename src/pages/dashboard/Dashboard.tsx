import { Box,Stack} from "@mui/material"
import LineChart from "../../components/charts/LineChart"
import Earning from "../../components/cards/Earning"
import ItemEarning from "../../components/cards/ItemEarning"
import Impression from "../../components/cards/Impression" 
import ActiveUser from "../../components/cards/ActiveUser"



function Dashboard() {
  return (
    <>
    <Box 
      display='flex' 
      gap={3}
    >
      <Stack direction={"column"} spacing={3}>
        <ActiveUser />
        <LineChart />
      </Stack>  
      <Stack 
        direction="column" 
        spacing={3} 
      >
        <Earning />
        <ItemEarning />
        <Impression />
      </Stack>
    </Box>
    

    </>
  )
}
export default Dashboard