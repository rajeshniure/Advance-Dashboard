import { Box, List } from "@mui/material";
import SidebarItem from "./SidebarItem";
import type { MenuItem } from "./useSidebarState";

interface SidebarMenuProps {
  menuItems: MenuItem[];
  isOpen: (itemId: string) => boolean;
  isActive: (itemId: string) => boolean;
  handleItemClick: (itemId: string) => void;
  handleDropdownToggle: (itemId: string, level: number) => void;
}

const SidebarMenu = ({
  menuItems,
  isOpen,
  isActive,
  handleItemClick,
  handleDropdownToggle
}: SidebarMenuProps) => {
  
  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const active = isActive(item.id);
    const open = isOpen(item.id);

    return (
      <SidebarItem
        key={item.id}
        icon={item.icon}
        label={item.label}
        level={level}
        active={active}
        hasChildren={hasChildren}
        isOpen={open}
        onClick={() => !hasChildren && handleItemClick(item.id)}
        onToggle={() => hasChildren && handleDropdownToggle(item.id, level)}
        path={item.path}
      >
        {hasChildren && item.children?.map((child) => renderMenuItem(child, level + 1))}
      </SidebarItem>
    );
  };

  return (
    <Box 
      sx={{
        flex: 1,
        overflowY: 'auto',
        py: 2,
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        scrollbarWidth: 'none',
      }}
    >
      <List component="nav" disablePadding>
        {menuItems.map((item) => renderMenuItem(item, 0))}
      </List>
    </Box>
  );
};

export default SidebarMenu; 