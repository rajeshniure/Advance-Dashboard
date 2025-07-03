import { Stack,  Typography,Card } from '@mui/material'
import menuhorizontal from '../../assets/icon/menu horizental.png'
import theme from '../../theme'

const Todotask = ({title}: {title: string}) => {
  return (
    <Card sx={{borderTop:3, borderColor:"primary.main"}}>
    <Stack direction="row" justifyContent={"space-between"} sx={{p:2, backgroundColor:theme.palette.grey[400], borderRaduis:"8px", border:"1"}}>
    <Typography variant="body2">{title}</Typography>
    <img src={menuhorizontal} alt="" />
   </Stack>
   </Card>
  )
}

export default Todotask