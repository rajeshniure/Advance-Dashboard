import { Box } from '@mui/material';
import {StatsCard} from './CardComponents';
import usersIcon from '../../assets/image/Users.svg';
import clicksIcon from '../../assets/image/Clicks.svg';
import salesIcon from '../../assets/image/Sales.svg';
import ItemsIcon from '../../assets/image/Items.svg';

const MoreStatsCard = () => {
  return (
    <Box display='flex' flexDirection='row' gap='2rem' marginBottom='2rem' >
<StatsCard
  imageSrc={usersIcon}
  title="Users"
  value="35k"
  progressValue={40}
  progressColor="primary" // or "primary", "secondary", etc.
/>
<StatsCard
  imageSrc={clicksIcon}
  title="Clicks"
  value="1m"
  progressValue={40}
  progressColor="success" // or "primary", "secondary", etc.
/>
<StatsCard
  imageSrc={salesIcon}
  title="Sales"
  value="345$"
  progressValue={40}
  progressColor="error" // or "primary", "secondary", etc.
/>
<StatsCard
  imageSrc={ItemsIcon}
  title="Items"
  value="68"
  progressValue={40}
  progressColor="info" // or "primary", "secondary", etc.
/>
    </Box>
  )
}

export default MoreStatsCard