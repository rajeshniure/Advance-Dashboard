import {Card, Typography,Button} from '@mui/material';
import theme from '../../theme';
const Earning = () => {
  return (
    
    <Card elevation={2}
    sx={{display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:2,
    width: { xs: "100%", sm: "90%", md: "17rem" },
    maxWidth: "100%",
    p: { xs: 2, sm: 3, md: 4 },
    borderRadius: 3,
    backgroundColor:"white",
    mx: "auto",
    }}>
        <Typography pt={2}>
            Your earning this month
        </Typography>
        <Typography variant='h1' sx={{color:theme.palette.primary.main ,fontSize:"3.5rem"}}>
            735.2$
        </Typography>
        <Typography variant='body1'sx={{textAlign:"center", color:theme.palette.text.secondary}}>
            update your payout <br/>method in Setting
        </Typography>
        <Button
        size="small"
        variant="outlined"
        sx={{ border: 1,borderColor: theme.palette.grey[400], width: "11rem", color: theme.palette.primary.main, fontSize: "0.7rem", height: "2rem" }}
        >Withdraw all earning</Button>

</Card>

    
  )
}

export default Earning