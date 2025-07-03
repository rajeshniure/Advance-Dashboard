// import { BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { Box} from "@mui/material";
import theme from "./theme";


const pathTitleMap: Record<string, string> = {
  "/": "Home",
  "/dashboard": "Dashboard",
  "/analytics": "Analytics",
  "/applications/kanban": "Kanban",
};

function App() {
  const location = useLocation();
  const title = pathTitleMap[location.pathname] || "Dashboard";
  return (

      <Box sx={{ display: "flex", flexDirection: "column" ,backgroundColor:theme.palette.customBackgrounds.background2}}>
        <Navbar title={title} />
        <Box sx={{ display: "flex", flex: 1, mt: 8 }}>
          <Sidebar />
          <Box sx={{ flex: 1, p: 2 }}>
            <AppRoutes />
          </Box>
        </Box>
      </Box>

  );
}

export default App;