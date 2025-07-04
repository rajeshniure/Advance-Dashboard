import React from 'react';
import { Card, Stack } from '@mui/material';
import Todotask from '../cards/Todotask';
import CustomButton from '../buttons/CustomButton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import { WebDevCard } from '../cards/CardComponents';

export interface CardData {
  title: string;
  teamName: string;
  duration: string;
  attachments: number;
  comments: number;
}


interface KanbanColumnProps {
  title: string;
  cards: CardData[];
  showAdd?: boolean;
  onAddClick?: () => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, cards, showAdd = false, onAddClick }) => (
  <Card sx={{ backgroundColor: 'customBackgrounds.neutral' }}>
    <Todotask title={title} />
    <Stack sx={{ p: 3 }} spacing={2}>
      {showAdd && (
        <CustomButton
          label="Add Task"
          variant="outlined"
          startIcon={<AddRoundedIcon />}
          sx={{ border: '2px dashed #89868D', color: 'text.secondary' }}
          onClick={onAddClick}
        />
      )}
      {cards.map((c, i) => (
        <WebDevCard key={i} {...c} />
      ))}
    </Stack>
  </Card>
);

export default KanbanColumn;