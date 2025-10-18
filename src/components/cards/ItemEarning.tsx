import {Card, Typography} from '@mui/material';
import {ItemCard} from './CardComponents';
import CubeIcon from '/assets/image/Cube.svg';
import Cube2Icon from '/assets/image/Cube2.svg';
import Cube3Icon from '/assets/image/Cube3.svg';


const Earning = () => {
  return (
    
    <Card elevation={2}
    sx={{display:"flex",
    flexDirection:"column",
    gap:2,
    width: { xs: "50%", sm: "90%", md: "17rem" },
    maxWidth: "100%",
    p: { xs: 2, sm: 3, md: 4 },
    paddingLeft:"2rem",
    backgroundColor:"white",
    borderRadius: 3,
    mx: "auto",

    }}>
        <Typography py={1} sx={{fontWeight:"700"}}>
            Earnings by items
        </Typography>
        <ItemCard
        imageSrc={CubeIcon}
        altText="Users icon"
        title="Bento 3D Kit"
        subtitle="Illustration"
        />
        <ItemCard
        imageSrc={Cube2Icon}
        altText="Users icon"
        title="Bento 3D Kit"
        subtitle="Coded Template"
        />
        <ItemCard
        imageSrc={Cube3Icon}
        altText="Users icon"
        title="Bento 3D Kit"
        subtitle="Illustration"
        />


</Card>

    
  )
}

export default Earning