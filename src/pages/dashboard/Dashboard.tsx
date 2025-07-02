import { Box} from "@mui/material"
import LineChart from "../../components/charts/LineChart"
import Earning from "../../components/cards/Earning"
import ItemEarning from "../../components/cards/ItemEarning"
import Impression from "../../components/cards/Impression" 
import MoreStatsCard from "../../components/cards/MoreStatsCard"


function Dashboard() {
  return (
    <>
    <Box position="absolute" top="10%" left="20%" display='flex' gap='10rem'>
      <Box>
      <Box >
      <MoreStatsCard />
      </Box>
     <Box >
      <LineChart />
      </Box>
      </Box>
      <Box display='flex' flexDirection='column' gap='2rem'>
        <Box>
      <Earning />
      </Box>
      <Box>
      <ItemEarning />
      </Box>
      <Box>
        <Impression />
      </Box>
      </Box>
    
    </Box>
    </>
  )
}
export default Dashboard