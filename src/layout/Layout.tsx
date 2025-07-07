import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@mui/material";
import theme from "../theme";

type PathTitleMap = Record<string, string>;

const pathTitleMap: PathTitleMap = {
  "/": "Home",
  "/dashboard": "Dashboard",
  "/analytics": "Analytics",
  "/applications/kanban": "Kanban",
  "/applications/wizard": "Wizard",
  "/applications/data-tables": "Data Tables",
  "/applications/calendar": "Calendar",
};

function Layout() {
  const location = useLocation();
  const title = pathTitleMap[location.pathname] || "Dashboard";

  return (
    <Box display="flex" width="100%" minHeight="100vh"  bgcolor={theme.palette.customBackgrounds.background2}>
      <Box>
        <Sidebar />
      </Box>
      <Box width="100%">
        <Box height="60px">
        <Navbar title={title} />
        </Box>
        <Box p={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
