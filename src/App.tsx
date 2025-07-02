import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { Box} from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <Router>

      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" ,backgroundColor:theme.palette.customBackgrounds.background2}}>
        <Navbar />
        <Box sx={{ display: "flex", flex: 1, mt: 8 }}>
          <Sidebar />
          <Box sx={{ flex: 1, p: 2 }}>
            <AppRoutes />
          </Box>
        </Box>
      </Box>

    </Router>
  );
}

export default App;