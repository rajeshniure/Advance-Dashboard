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
      justifyContent='center' 
      alignItems='flex-start'
      sx={{
        width: '100%',
        position: 'relative', 
      }}
    >
      <Stack direction={"column"} spacing={3} sx={{ maxWidth: 'fit-content' }}>
        <ActiveUser />
        <LineChart />
      </Stack>
      
      <Stack 
        direction="column" 
        spacing={3} 
        sx={{
          position:"fixed", 
          right:"5rem",
          width: 'auto'
        }}
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