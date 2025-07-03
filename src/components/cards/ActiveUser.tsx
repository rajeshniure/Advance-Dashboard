import { Stack ,Card,Typography} from "@mui/material"
import MoreStatsCard from "./MoreStatsCard"
import SmallLine from "./SmallLine"
import Barchart from "../charts/Barchart"
import theme from "../../theme"



const ActiveUser = () => {
  return (
    <Card sx={{pb:'2rem',px:"3rem",backgroundColor:theme.palette.background.default}}>  
    <Typography variant="body1" sx={{py:2, fontSize:"1.4rem"}}>Active users right now</Typography>
      <Stack direction="column" spacing={5} >
        <Stack direction="row" spacing={9}>
        <SmallLine /> 
        <Barchart />
        </Stack>
        <MoreStatsCard/>
        </Stack>
    </Card>
  )
}

export default ActiveUser