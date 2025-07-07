import { useState } from "react";
import MainCard from "../wizard/MainCard";
import { StatsCard } from "../cards/CardComponents";
import usersIcon from "../../assets/image/Users.svg";
import { Grid, Stack, Checkbox, FormControlLabel, Box } from "@mui/material";
import theme from "../../theme";
import FormButtons from "./FormButtons";




const options = [
  { group: "Design", items: ["UI/UX", "Illustration", "Branding"] },
  { group: "Develop", items: ["Frontend", "Backend", "Fullstack"] },
  { group: "Code", items: ["JavaScript", "Python", "C++"] },
];

interface AccountStepProps {
  handleNext: () => void;
}

const AccountStep: React.FC<AccountStepProps> = ({handleNext}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const isSelected = (value: string) => selected.includes(value);


  return (
    <MainCard
      title="What are you doing? (checkboxes)"
      subtitle="Give us more detail about you. What do you enjoy doing in your spare time?"
    >
      <Grid container spacing={2}>
        {options.map((category, index) => (
          <Grid size="auto" key={index}>
            <Stack direction="column" spacing={3}>
              {category.items.map((item) => (
                <Box 
                  key={item}
                  onClick={() => handleToggle(item)}
                  sx={{ cursor: "pointer" }}
                >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isSelected(item)}
                      onChange={() => handleToggle(item)}
                      sx={{ display: "none" }}
                    />
                  }
                  label={
                    <StatsCard
                      imageSrc={usersIcon}
                      value={item}
                      valueSx={{ fontSize: "1.5rem" }}
                      imgSx={{ width: "40px" }}
                      cardSx={{
                        width: "10rem",
                        cursor: "pointer",
                        border: isSelected(item)
                          ? `1px solid ${theme.palette.primary.main}`
                          : "1px solid #e0e0e0",
                        backgroundColor: isSelected(item)
                          ? "#e3f2fd"
                          : "#fff",
                      }}
                    />
                  }
                />
                </Box>
              ))}
            </Stack>
          </Grid>
        ))}
        <FormButtons label="Next" handleNext={handleNext} />
      </Grid>
    </MainCard>
  );
};

export default AccountStep;
