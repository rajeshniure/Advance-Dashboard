import {  Stack } from '@mui/material';
import {StatsCard} from './CardComponents';
import usersIcon from '../../assets/image/Users.svg';
import clicksIcon from '../../assets/image/Clicks.svg';
import salesIcon from '../../assets/image/Sales.svg';
import ItemsIcon from '../../assets/image/Items.svg';

const MoreStatsCard = () => {
  return (
<Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
<StatsCard
  imageSrc={usersIcon}
  title="Users"
  value="35k"
  progressValue={55}
  progressColor="primary" 
/>
<StatsCard
  imageSrc={clicksIcon}
  title="Clicks"
  value="1m"
  progressValue={55}
  progressColor="success" 
/>
<StatsCard
  imageSrc={salesIcon}
  title="Sales"
  value="345$"
  progressValue={55}
  progressColor="error" 
/>
<StatsCard
  imageSrc={ItemsIcon}
  title="Items"
  value="68"
  progressValue={55}
  progressColor="info" 
/>
    </Stack>
  )
}

export default MoreStatsCard