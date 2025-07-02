import { Line } from 'react-chartjs-2';
import { Card, Typography, Box, useTheme } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  Title,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Title
);

const SalesByAgeChart = () => {
  const theme = useTheme();

  const data = {
    labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500],
    datasets: [
      {
        label: 'Sales',
        borderColor: theme.palette.primary.main,
        backgroundColor: 'rgb(132, 27, 207)',
        data: [0, 18, 17, 32, 24, 34, 21, 24, 15, 29, 10],
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle' as const,
          boxWidth: 6,
          boxHeight: 6,
          color: 'rgb(132, 27, 207)',
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        min: 10,
        max: 40,
        grid: { display: true },
        ticks: {
          stepSize: 5,
          callback: (value: string | number) => {
            const num = Number(value);
            return num === 40 ? '' : `${num} to ${num + 5}`;
          },
        },
      },
    },
  };

  return (
    <Card elevation={2} sx={{ width: '60rem', p: 2, position: 'relative',backgroundColor: 'white' }}>
      <Typography sx={{ fontSize: 19, mb: 2, color: 'black' }}>
        Sales by Age
      </Typography>
      <Box sx={{ height: '16rem' }}>
        <Line data={data} options={options} />
      </Box>
    </Card>
  );
};

export default SalesByAgeChart;
