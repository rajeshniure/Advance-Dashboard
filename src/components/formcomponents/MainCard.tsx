
import {  Typography, Box } from '@mui/material';
import type { ReactNode } from 'react';

type MainCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const MainCard = ({ title, subtitle, children }: MainCardProps) => (
  <Box>
      <Box mb={3}>
        <Typography variant="h5" fontWeight={600} textAlign="center">
          {title}
        </Typography>
        <Typography variant="body2" textAlign="center" color="text.secondary" mt={1}>
          {subtitle}
        </Typography>
      </Box>
      {children}
  </Box>
);

export default MainCard;
