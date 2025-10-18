import { Drawer, useTheme } from "@mui/material";
import SidebarLogo from "./SidebarLogo";
import SidebarMenu from "./SidebarMenu";
import UserProfile from "./UserProfile";
import useSidebarState from "./useSidebarState";
import { sidebarMenuItems } from "./sidebarData";

type SidebarProps = {
  variant?: "permanent" | "temporary";
  open?: boolean;
  onClose?: () => void;
};

const Sidebar = ({ variant = "permanent", open = true, onClose }: SidebarProps) => {
  const theme = useTheme();
  const {
    handleItemClick,
    handleDropdownToggle,
    isOpen,
    isActive,
  } = useSidebarState(sidebarMenuItems);

  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      anchor="left"
      ModalProps={{ keepMounted: true }}
      sx={{
        width: 280,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
        }
      }}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            bgcolor: theme.palette.background.default,
            borderRight: `1px solid ${theme.palette.customBackgrounds?.border || 'transparent'}`,
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