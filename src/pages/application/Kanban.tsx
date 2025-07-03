import { Box, Stack, Grid, Card } from "@mui/material";
import { WebDevCard } from "../../components/cards/CardComponents";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CustomButton from "../../components/buttons/CustomButton";
import Todotask from "../../components/cards/Todotask";

const Kanban = () => {
  return (
    <Grid
      container
      spacing={5}
      direction="row"
      sx={{
        justifyContent: "center",
      }}
    >
      <Grid size="auto">
        <Card sx={{ backgroundColor: "customBackgrounds.neutral" }}>
          <Todotask title="To Do task" />
          <Stack sx={{ padding: "1.5rem" }}>
            <CustomButton
              label=""
              variant="outlined"
              size="large"
              startIcon={<AddRoundedIcon />}
              sx={{ border: "#89868D Dashed 2px", color: "gray" }}
            />
            <WebDevCard
              title="Webdev"
              teamName="Cisco Team"
              duration="12 Days"
              attachments={7}
              comments={8}
            />
            <WebDevCard
              title="Webdev"
              teamName="Cisco Team"
              duration="12 Days"
              attachments={7}
              comments={8}
            />
            <WebDevCard
              title="Webdev"
              teamName="Cisco Team"
              duration="12 Days"
              attachments={7}
              comments={8}
            />
            <WebDevCard
              title="Webdev"
              teamName="Cisco Team"
              duration="12 Days"
              attachments={7}
              comments={8}
            />
          </Stack>
        </Card>
      </Grid>

      <Grid size="auto">
        <Card sx={{ backgroundColor: "customBackgrounds.neutral" }}>
          <Todotask title="To Do task" />
          <Stack sx={{ padding: "1.5rem" }}>
            <WebDevCard
              title="Webdev"
              teamName="Cisco Team"
              duration="12 Days"
              attachments={7}
              comments={8}
            />
            <WebDevCard
              title="Webdev"
              teamName="Cisco Team"
              duration="12 Days"
              attachments={7}
              comments={8}
            />
            <WebDevCard
              title="Webdev"
              teamName="Cisco Team"
              duration="12 Days"
              attachments={7}
              comments={8}
            />
          </Stack>
        </Card>
      </Grid>

      <Grid size="auto">
        <Card sx={{ backgroundColor: "customBackgrounds.neutral" }}>
          <Todotask title="In Progress" />
          <Stack sx={{ padding: "1.5rem" }}>
            <WebDevCard
              title="Webdev"
              teamName="Cisco Team"
              duration="12 Days"
              attachments={7}
              comments={8}
            />
            <WebDevCard
              title="Webdev"
              teamName="Cisco Team"
              duration="12 Days"
              attachments={7}
              comments={8}
            />
            <WebDevCard
              title="Webdev"
              teamName="Cisco Team"
              duration="12 Days"
              attachments={7}
              comments={8}
            />
            <WebDevCard
              title="Webdev"
              teamName="Cisco Team"
              duration="12 Days"
              attachments={7}
              comments={8}
            />
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Kanban;
