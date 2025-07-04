import React, { useState, useEffect } from 'react';
import { Box, Card, Grid } from '@mui/material';
import theme from '../../theme';
import { DesignToolCard } from '../cards/CardComponents';
import SearchCalender from '../cards/SearchCalender';
import KanbanColumn from './KanbanColumn';
import AddTaskModal from './AddTaskModal';

export interface CardData {
  title: string;
  teamName: string;
  duration: string;
  attachments: number;
  comments: number;
}


const KanbanBoard: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [todoCards, setTodoCards] = useState<CardData[]>([
    {
      title: 'Webdev',
      teamName: 'Cisco Team',
      duration: '12 Days',
      attachments: 7,
      comments: 8,
    },
  ]);

  useEffect(() => {
    const storedCards = localStorage.getItem('kanbanCards');
    if (storedCards) setTodoCards(JSON.parse(storedCards));
  }, []);

  const handleAddCard = (card: CardData) => {
    const updated = [...todoCards, card];
    setTodoCards(updated);
    localStorage.setItem('kanbanCards', JSON.stringify(updated));
  };

  return (
    <>
      <AddTaskModal open={openModal} onClose={() => setOpenModal(false)} onAdd={handleAddCard} />

      <Box display="flex" flexDirection="column" gap={3} alignItems="center">
        <Card sx={{ px: 4, py: 2, backgroundColor: 'customBackgrounds.neutral' }}>
          <Box>
            <DesignToolCard />
            <SearchCalender />
          </Box>

          <Box
            width="100%"
            p={3}
            borderRadius="8px"
            border={`1px solid ${theme.palette.grey[400]}`}
          >
            <Grid container spacing={5} justifyContent="center">
              <Grid size="auto">
                <KanbanColumn
                  title="To Do Task"
                  cards={todoCards}
                  showAdd
                  onAddClick={() => setOpenModal(true)}
                />
              </Grid>

              <Grid size="auto">
                <KanbanColumn
                  title="In Progress"
                  cards={[
                    {
                      title: 'Cloud computing',
                      teamName: 'Gento Team',
                      duration: '12 Days',
                      attachments: 7,
                      comments: 8,
                    },
                    {
                      title: 'Update subscriptions',
                      teamName: 'Developing Team',
                      duration: '15 Days',
                      attachments: 5,
                      comments: 4,
                    },
                    {
                      title: 'Poster design',
                      teamName: 'Design Team',
                      duration: '5 Days',
                      attachments: 10,
                      comments: 4,
                    },
                  ]}
                />
              </Grid>

              <Grid size="auto">
                <KanbanColumn
                  title="Done"
                  cards={[
                    {
                      title: 'Landing page',
                      teamName: 'Design Team',
                      duration: '11 Days',
                      attachments: 7,
                      comments: 8,
                    },
                    {
                      title: 'Food app design',
                      teamName: 'Design Team',
                      duration: '21 Days',
                      attachments: 4,
                      comments: 5,
                    },
                    {
                      title: 'Web design',
                      teamName: 'Cisco Team',
                      duration: '14 Days',
                      attachments: 12,
                      comments: 8,
                    },
                    {
                      title: 'Flyer design',
                      teamName: 'Developing Team',
                      duration: '22 Days',
                      attachments: 5,
                      comments: 13,
                    },
                    {
                      title: 'Cloud computing',
                      teamName: 'Gento Team',
                      duration: '12 Days',
                      attachments: 6,
                      comments: 7,
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default KanbanBoard;