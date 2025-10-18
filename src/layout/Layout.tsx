import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import theme from "../theme";
import { useState } from "react";

type PathTitleMap = Record<string, string>;

const pathTitleMap: PathTitleMap = {
  "/": "Home",
  "/dashboard": "Dashboard",
  "/analytics": "Analytics",
  "/applications/kanban": "Kanban",
  "/applications/wizard": "Wizard",
  "/applications/data-tables": "Data Tables",
  "/applications/calendar": "Calendar",
  "/ecommerce/products/new-product": "New Product",
  "/pages/projects/timeline": "Timeline",
  "/ecommerce/products/product-list": "Product List",
  "/ecommerce/products/product-list/:id": "Product Detail",
  "/ecommerce/overview": "Overview",
  "/pages/setting": "Setting",
};

function Layout() {
  const location = useLocation();
  const title = pathTitleMap[location.pathname] || "Dashboard";
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "125vh",
        bgcolor: theme.palette.customBackgrounds?.background2,
        overflow: "hidden",
      }}
    >
      {/* Sidebar: permanent on md+, temporary drawer on small screens */}
      <Box component="aside" sx={{ width: { md: 280 }, flexShrink: 0 }}>
        <Sidebar variant={isMdUp ? "permanent" : "temporary"} open={isMdUp ? true : mobileOpen} onClose={() => setMobileOpen(false)} />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "sticky", top: 0, zIndex: (theme.zIndex?.appBar ?? 1200) + 1 }}>
          <Navbar title={title} onMenuClick={handleDrawerToggle} />
        </Box>

        <Box component="section" sx={{ flexGrow: 1, p: 2, overflow: "auto" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
