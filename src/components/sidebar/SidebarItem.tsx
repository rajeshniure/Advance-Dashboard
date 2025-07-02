import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Simplified Styled Component
const StyledListItemButton = styled(ListItemButton)<{
  level: number;
}>(({ theme, level }) => ({
  paddingLeft: theme.spacing(2 + level * 2),
  borderRadius: level === 0 ? 12 : 4,
  margin: level === 0 ? "4px 8px" : "2px 0",
  minHeight: level === 0 ? 48 : 40,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "&.Mui-selected": {
    ...(level === 0 && {
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
      },
      "& .MuiListItemIcon-root": {
        color: theme.palette.primary.main,
      },
    }),
    color: theme.palette.primary.main,
    ...(level > 0 && {
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    }),
  },
}));

interface SidebarItemProps {
  icon?: React.ReactElement;
  label: string;
  children?: React.ReactNode;
  active?: boolean;
  level?: number;
  hasChildren?: boolean;
  onClick?: () => void;
  isOpen?: boolean;
  onToggle?: () => void;
  path?: string;
}

const SidebarItem = ({
  icon,
  label,
  children,
  active = false,
  level = 0,
  hasChildren = false,
  onClick,
  isOpen = false,
  onToggle,
  path,
}: SidebarItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (hasChildren && onToggle) onToggle();
    else if (onClick) onClick();
    else if (path) navigate(path);
  };

  return (
    <>
      <StyledListItemButton
        onClick={handleClick}
        selected={active}
        level={level}
      >
        {icon && level === 0 && (
          <ListItemIcon sx={{ minWidth: 40 }}>
            {icon}
          </ListItemIcon>
        )}

        <ListItemText 
          primary={label}
          primaryTypographyProps={{
            fontWeight: active ? 600 : level === 0 ? 500 : 400,
            fontSize: level === 0 ? "1rem" : "0.875rem"
          }}
        />

        {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
      </StyledListItemButton>

      {hasChildren && (
        <Collapse in={isOpen} unmountOnExit>
          <List disablePadding sx={{ pl: level === 0 ? 1 : 0 }}>
            {children}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarItem;
