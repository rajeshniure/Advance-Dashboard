import { Box } from "@mui/material";
import {
  // StatsCard,
  ProfileCard,
  DesignToolCard,
  WebDevCard,
  DesignReviewCard,
  IphoneCard
} from "./CardComponents";

const CardExamples = () => (
  <Box p={4} display="flex" flexDirection="column" gap={3}>
    {/* <StatsCard /> */}
    <ProfileCard />
    <DesignToolCard />
    <WebDevCard />
    <DesignReviewCard />
    <IphoneCard />
  </Box>
);

export default CardExamples; 