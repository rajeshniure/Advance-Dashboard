
import { Card, Typography, Box, CardContent } from '@mui/material';
import type { ReactNode } from 'react';

type MainCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

const MainCard = ({ title, subtitle, children }: MainCardProps) => (
  <Card sx={{ maxWidth: 600, mx: 'auto', mt: 3, p: 2, borderRadius: 3, backgroundColor: 'customBackgrounds.neutral' }}>
    <CardContent>
      <Box mb={3}>
        <Typography variant="h5" fontWeight={600} textAlign="center">
          {title}
        </Typography>
        <Typography variant="body2" textAlign="center" color="text.secondary" mt={1}>
          {subtitle}
        </Typography>
      </Box>
      {children}
    </CardContent>
  </Card>
);

export default MainCard;
