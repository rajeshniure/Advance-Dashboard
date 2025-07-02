import theme from "../../theme";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Card, CardContent, Typography, Box } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Impression = () => {
  const labels = ["Mon", "Tue", "Wed", "Thu"];
  const dataValues = [26, 4, 22, 6];

  const barColors = dataValues.map((_, i) =>
    i === 2 ? theme.palette.primary.main : theme.palette.secondary.main
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Impression",
        data: dataValues,
        backgroundColor: barColors,
        borderRadius: 8,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        yAlign: "bottom" as const,
        backgroundColor: "#6b3fc9",
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#777",
          font: { size: 13 },
        },
      },
      y: {
        grid: {
          color: "#eee",
        },
        ticks: {
          stepSize: 10,
          color: "#777",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <Card
      elevation={2}
      sx={{
        width: "15rem",
        borderRadius: 3,
        p: 1,
        pb:0,
        backgroundColor: theme.palette.customBackgrounds.neutral,
      }}
    >
      <CardContent >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 500, color: "#333"}}
        >
          Impression
        </Typography>
        <Box sx={{ height: 135 }}>
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Impression;
