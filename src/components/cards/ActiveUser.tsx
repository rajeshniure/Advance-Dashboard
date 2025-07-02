import { Stack ,Card,Typography} from "@mui/material"
import MoreStatsCard from "./MoreStatsCard"
import SmallLine from "./SmallLine"
import Barchart from "../charts/Barchart"
import theme from "../../theme"



const ActiveUser = () => {
  return (
    <Card sx={{pb:'2rem',px:"1rem",backgroundColor:theme.palette.background.default}}>  
    <Typography sx={{py:2}}>Active users right now</Typography>
      <Stack direction="column" spacing={2} >
        <Stack direction="row" spacing={6}>
        <SmallLine /> 
        <Barchart />
        </Stack>
        <MoreStatsCard/>
        </Stack>
    </Card>
  )
}

export default ActiveUser