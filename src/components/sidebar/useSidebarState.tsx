import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactElement;
  path: string;
  children?: MenuItem[];
}

export const useSidebarState = (menuItems: MenuItem[]) => {
  const [activeItem, setActiveItem] = useState("");
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const findItemById = (items: MenuItem[], id: string): MenuItem | null =>
    items.reduce<MenuItem | null>(
      (found, item) =>
        found ||
        (item.id === id
          ? item
          : item.children
          ? findItemById(item.children, id)
          : null),
      null
    );

  const closeChildren = (item: MenuItem, set: Set<string>) =>
    item.children?.forEach(child => {
      set.delete(child.id);
      closeChildren(child, set);
    });

  const findParentId = (
    items: MenuItem[],
    targetId: string,
    parentId: string | null = null
  ): string | null =>
    items.reduce<string | null>((found, item) => {
      if (found) return found;
      if (item.id === targetId) return parentId;
      return item.children
        ? findParentId(item.children, targetId, item.id)
        : null;
    }, null);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    const item = findItemById(menuItems, itemId);
    if (item && item.path) {
      navigate(item.path);
    }
  };

  const handleDropdownToggle = (itemId: string, level: number) => {
    setOpenDropdowns(prev => {
      const set = new Set(prev);
      if (level === 0) {
        menuItems.forEach(item => {
          if (item.id !== itemId) {
            set.delete(item.id);
            item.children?.forEach(child => {
              set.delete(child.id);
              closeChildren(child, set);
            });
          }
        });
      } else {
        const parentId = findParentId(menuItems, itemId);
        if (parentId) {
          const parent = findItemById(menuItems, parentId);
          parent?.children?.forEach(sibling => {
            if (sibling.id !== itemId && sibling.children) {
              set.delete(sibling.id);
              closeChildren(sibling, set);
            }
          });
        }
      }
      if (set.has(itemId)) {
        set.delete(itemId);
        const item = findItemById(menuItems, itemId);
        if (item) closeChildren(item, set);
      } else {
        set.add(itemId);
      }
      return set;
    });
  };

  return {
    activeItem,
    openDropdowns,
    handleItemClick,
    handleDropdownToggle,
    isOpen: (id: string) => openDropdowns.has(id),
    isActive: (id: string) => activeItem === id || openDropdowns.has(id)
  };
};

export default useSidebarState;