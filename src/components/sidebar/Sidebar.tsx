import { Drawer, useTheme } from "@mui/material";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
import UserProfile from "./UserProfile";
import useSidebarState from "./useSidebarState";
import { sidebarMenuItems } from "./sidebarData";

const Sidebar = () => {
  const theme = useTheme();
  const { 
    handleItemClick, 
    handleDropdownToggle, 
    isOpen, 
    isActive 
  } = useSidebarState(sidebarMenuItems);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: "280px",
      }}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            width: "280px",
            bgcolor: theme.palette.background.default,
            borderRight: `1px solid ${theme.palette.customBackgrounds.border}`,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
          }
        }
      }}
    >
      <SidebarLogo />
      <SidebarMenu 
        menuItems={sidebarMenuItems}
        isOpen={isOpen}
        isActive={isActive}
        handleItemClick={handleItemClick}
        handleDropdownToggle={handleDropdownToggle}
      />
      <UserProfile />
    </Drawer>
  );
};

export default Sidebar; 