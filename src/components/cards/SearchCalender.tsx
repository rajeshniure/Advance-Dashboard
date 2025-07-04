import {

  CardContent,
  TextField,
  InputAdornment,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FilterListIcon from "@mui/icons-material/FilterList";

const SearchCalender = () => {
  return (
    
    <Box sx={{ width: "100%", backgroundColor: "customBackgrounds.neutral", pt: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent={"space-between"} alignItems="center">
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />

          <TextField
            variant="outlined"
            type="date"
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }}>
            <FilterListIcon sx={{ mr: 1 }} />
            <Typography variant="body1" fontWeight="medium">
              Apply Filter
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Box>
  );
};

export default SearchCalender;