import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import {
  MoreVert,
  ArrowForwardIos,
  AttachFile,
  ChatBubbleOutline,
} from "@mui/icons-material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';


import usersIcon from "../assets/icon/users.svg";
import Oliva from "../assets/image/Frame 1149.svg";
import photoshopIcon from "../assets/image/Photoshop.svg";
import peoplesImg from "../assets/image/peoples.svg";
import plusman from "../assets/image/plusman.svg";
import clock from "../assets/icon/clock.png";
import CustomButtons from "../components/CustomButtons";
import calender from "../assets/icon/calender.png";



const StatsCard = () => (
  <Card sx={{ width: 160, backgroundColor: "customBackgrounds.neutral" }}>
    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box display="flex" alignItems="center" gap={2}>
      <img src={usersIcon} alt="" />
      <Typography variant="body2" color="text.primary">
        Users
      </Typography>
      </Box>
      <Typography variant="h1" fontWeight="bold">
        35k
      </Typography>
      <Box  mt={1} height={8} bgcolor="customBackgrounds.background2" borderRadius={4} width="100%" >
      <Box  height={8} bgcolor="primary.main" borderRadius={4} width="60%" />
      </Box>
    </CardContent>
  </Card>
);

const ItemCard = () => (
  <Box display="flex" alignItems="center" gap={2} >
    <img src={usersIcon} alt="" height={40} />
    <Box>
      <Typography fontWeight="medium">Bento 3D Kit</Typography>
      <Typography variant="body2" color="text.secondary">
        Illustration
      </Typography>
    </Box>
    <ArrowForwardIos fontSize="small"  />
  </Box>
);


const ProfileCard = () => (
  <Box display="flex" alignItems="center" mt={3}>
    <Box display="flex" alignItems="center" gap={1} >
    <CheckBoxIcon  />
    <img src={Oliva} alt="" height={35} />
    </Box>
    <Box ml={2}>
      <Typography>Oliva Rhye</Typography>
      <Typography variant="body2" color="text.secondary">
        Oliva@gmail.com
      </Typography>
    </Box>
    <Box display="flex" ml="auto" gap={2} alignItems="center">
      <Typography color="text.secondary">Admin</Typography>
      <Typography color="text.secondary">Delete</Typography>
      <Typography color="text.secondary">Edit</Typography>
    </Box>
  </Box>
);


const DesignToolCard = () => (
  <Card sx={{ width: 300, mt: 3 ,backgroundColor: "customBackgrounds.neutral" }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between">
        <Stack direction="row" spacing={1} alignItems="center">
          
          <img src={photoshopIcon} alt="" />
          <Stack direction={"column"} spacing={0.5}>
          <Typography fontWeight="bold">Design tools</Typography>
          <img src={peoplesImg} alt="" />
          </Stack>
        </Stack>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Box>

      <Typography mt={2} variant="body2">
        Constantly growing. We’re constantly making mistakes from which we learn and improve
      </Typography>

      <Box >
        <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography variant="body2" sx={{fontWeight:'700'}}>10 </Typography>
        <Typography variant="body2" sx={{fontWeight:'700'}}>02.08.22</Typography>
       </Box>
        <Box display="flex" justifyContent="space-between" >
        <Typography variant="caption" >Participants</Typography>
        <Typography variant="caption" >Due date</Typography>
       </Box>
      </Box>
    </CardContent>
  </Card>
);

const WebDevCard = () => (
  <Card sx={{ width: 300, mt: 3, backgroundColor: "customBackgrounds.neutral" }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography fontWeight="medium">Webdev</Typography>
          <Typography variant="body2" color="text.secondary">
            Cisco Team
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
        <img src={clock} alt="" />
        <Typography variant="caption">12 Days</Typography>
        </Stack>
      </Box>


      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <AttachFile sx={{ fontSize: 18 }} />
          <Typography variant="body2">7</Typography>
          <ChatBubbleOutline sx={{ fontSize: 18 }} />
          <Typography variant="body2">8</Typography>
        </Box>
        <img src={plusman} alt="" />
      </Box>
    </CardContent>
  </Card>
);

const DesignReviewCard = () => (
  <Card sx={{ width: 300, mt: 3 , backgroundColor: "customBackgrounds.neutral" }}>
    <CardContent>
        <Box display="flex" justifyContent="space-between" >
          <Typography fontWeight="medium">Design Review</Typography>
          <CustomButtons
          label="12am to 2pm"
          variant="text"
          size="small"
          sx={{ backgroundColor: "#EEE4FF", borderRadius: "11px",fontSize: "0.6rem", border:"1px dashed ", height:"20px" }}
        />
        </Box>
       
        <Typography variant="body2" >Additional text</Typography>
        <Box display="flex" gap={1} mt={2}>
        <img src={calender} alt="" color="theme.primary.main" />
        <Typography variant="body2" >Monday, Jul 4, 2022</Typography>
        </Box>

    </CardContent>
  </Card>
);

const IphoneCard = () => (
  <Card sx={{ width: 300, mt: 3 , backgroundColor: "customBackgrounds.neutral" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" paddingLeft={1} >
      <Box>
        <Typography fontWeight="Bold">iphone 11</Typography>
        <Typography variant="body2" >London UK-Oct12 at 2:30AM</Typography>
      </Box>
      <Box>
        <IconButton>
          <MoreVert />
        </IconButton>
        </Box>
        </Box>
  </Card>
);

const CardDashboard = () => (
  <Box p={4} display="flex" flexDirection="column" gap={3}>
    <StatsCard />
    <ItemCard />
    <ProfileCard />
    <DesignToolCard />
    <WebDevCard />
    <DesignReviewCard />
    <IphoneCard />
  </Box>
);

export default CardDashboard;
