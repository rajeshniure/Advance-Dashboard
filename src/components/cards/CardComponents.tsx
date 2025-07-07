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
import Oliva from "../../assets/image/Frame 1149.svg";
// import photoshopIcon from "../../assets/image/Photoshop.svg";
import peoplesImg from "../../assets/image/peoples.svg";
import plusman from "../../assets/image/plusman.svg";
import clock from "../../assets/icon/clock.png";
import calender from "../../assets/icon/calender.png";
import CustomButton from "../buttons/CustomButton";
import { LinearProgress } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";


interface StatsCardProps {
  imageSrc: string;
  title?: string;
  value: string | number;
  progressValue?: number;
  progressColor?: "primary" | "success" | "info" | "error" | "info" | "warning";
  valueSx?: SxProps<Theme>;
  cardSx?: SxProps<Theme>;
  imgSx?: SxProps<Theme>;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  imageSrc,
  title,
  value,
  progressValue,
  progressColor = "primary",
  valueSx,
  cardSx,
  imgSx
}) => {
  return (
    <Box sx={{ width: 240, backgroundColor: "customBackgrounds.neutral", border: 1,borderRadius: 2, borderColor: "customBackgrounds.border" ,...cardSx}}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Box component="img" src={imageSrc} alt={`${title} icon`} width={60} sx={{...imgSx}} />
          <Typography variant="body1" color="text.primary" sx={{fontSize:"1.5rem"}}>
            {title}
          </Typography>
        </Box>
        <Typography variant="h1" fontWeight="bold" sx={{fontSize:"3.2rem", ...valueSx}}>
          {value}
        </Typography>
        {progressValue !== undefined && (
        <LinearProgress
          variant="determinate"
          value={progressValue}
          color={progressColor}
          sx={{ height: 6, borderRadius: 5 }}
        />
      )}
      </CardContent>
    </Box>
  );
};

interface ItemCardProps {
  imageSrc: string;
  altText?: string;
  title: string;
  subtitle?: string;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  imageSrc,
  altText = "icon",
  title,
  subtitle,
}) => (
  <Box display="flex" justifyContent='space-between' gap={2}>
    <img src={imageSrc} alt={altText} height={40} />
    <Box>
      <Typography fontWeight="medium">{title}</Typography>
      {subtitle && (
        <Typography variant="caption" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
    <ArrowForwardIos fontSize="small" />
  </Box>
);

export const ProfileCard = () => (
  <Box display="flex" alignItems="center" mt={3}>
    <Box display="flex" alignItems="center" gap={1}>
      <CheckBoxIcon />
      <img src={Oliva} alt="Profile" height={35} />
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

export const DesignToolCard = () => (
  <Box sx={{width:"100%", backgroundColor: "customBackgrounds.neutral" ,borderBottom:"1px solid", pb:"1.5rem"}}>
  <Box display="flex" justifyContent="space-between">
      <Box>
      <Typography variant="h6">
      Overview      
      </Typography>
        <Typography variant="body2">
        Edit or modify all card as you want
      </Typography>
      </Box>
<Box display="flex">
          <Stack direction={"column"} spacing={0.5}>
            <Typography fontWeight="bold">Design tools</Typography>
            <img src={peoplesImg} alt="People" />
          </Stack>
        <IconButton>
          <MoreVert />
        </IconButton>
 </Box>
 </Box>

  
  </Box>
);       


// export const DesignToolCard = () => (
//   <Card sx={{ width: 1000, mt: 3, backgroundColor: "customBackgrounds.neutral" }}>
//     <CardContent>
//       <Box>
//       <Typography mt={2} variant="h6">
//       Overview      
//       </Typography>
//         <Typography mt={2} variant="body2">
//         Constantly growing. We're constantly making mistakes from which we learn and improve
//       </Typography>
//       </Box>
//       <Box display="flex" justifyContent="space-between">
//           <Stack direction={"column"} spacing={0.5}>
//             <Typography fontWeight="bold">Design tools</Typography>
//             <img src={peoplesImg} alt="People" />
//           </Stack>
//         <IconButton>
//           <MoreVert />
//         </IconButton>
//       </Box>

      
//       <Box>
//         <Box display="flex" justifyContent="space-between" mt={2}>
//           <Typography variant="body2" sx={{ fontWeight: '700' }}>10 </Typography>
//           <Typography variant="body2" sx={{ fontWeight: '700' }}>02.08.22</Typography>
//         </Box>
//         <Box display="flex" justifyContent="space-between">
//           <Typography variant="caption">Participants</Typography>
//           <Typography variant="caption">Due date</Typography>
//         </Box>
//       </Box>
//     </CardContent>
//   </Card>
// );       
















interface WebDevCardProps {
  title: string;
  teamName: string;
  duration: string;
  attachments: number;
  comments: number;
}

export const WebDevCard: React.FC<WebDevCardProps> = ({
  title,
  teamName,
  duration,
  attachments,
  comments,

}) => (
  <Card sx={{ width: 300, mt: 3, backgroundColor: "customBackgrounds.neutral" }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography fontWeight="medium">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {teamName}
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <img src={clock} alt="Clock" />
          <Typography variant="caption">{duration}</Typography>
        </Stack>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Box display="flex" alignItems="center" gap={1}>
          <AttachFile sx={{ fontSize: 18 }} />
          <Typography variant="body2">{attachments}</Typography>
          <ChatBubbleOutline sx={{ fontSize: 18 }} />
          <Typography variant="body2">{comments}</Typography>
        </Box>
        <img src={plusman} alt="Add person" />
      </Box>
    </CardContent>
  </Card>
);

export const DesignReviewCard = () => (
  <Card sx={{ width: 300, mt: 3, backgroundColor: "customBackgrounds.neutral" }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight="medium">Design Review</Typography>
        <CustomButton
          label="12am to 2pm"
          variant="text"
          size="small"
          sx={{ 
            backgroundColor: "#EEE4FF", 
            borderRadius: "11px", 
            fontSize: "0.6rem", 
            border: "1px dashed", 
            height: "20px" 
          }}
        />
      </Box>

      <Typography variant="body2">Additional text</Typography>
      <Box display="flex" gap={1} mt={2}>
        <img src={calender} alt="Calendar" />
        <Typography variant="body2">Monday, Jul 4, 2022</Typography>
      </Box>
    </CardContent>
  </Card>
);

export const IphoneCard = () => (
  <Card sx={{ width: 300, mt: 3, backgroundColor: "customBackgrounds.neutral" }}>
    <Box display="flex" justifyContent="space-between" alignItems="center" paddingLeft={1}>
      <Box>
        <Typography fontWeight="Bold">iphone 11</Typography>
        <Typography variant="body2">London UK-Oct12 at 2:30AM</Typography>
      </Box>
      <Box>
        <IconButton>
          <MoreVert />
        </IconButton>
      </Box>
    </Box>
  </Card>
); 