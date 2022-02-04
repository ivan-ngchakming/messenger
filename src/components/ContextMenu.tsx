import React, { MouseEventHandler } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type MenuItemType = {
  label: string;
  callback: () => void;
}

const ContextMenu = ({ 
  children,
  menuItems,
}: { 
  children: React.ReactNode;
  menuItems: MenuItemType[];
}) => {
  const [contextMenu, setContextMenu] = React.useState<{mouseX: number, mouseY: number} | null>(null);

  const handleContextMenu: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const handleClick = (callback: () => void) => () => {
    callback();
    handleClose();
  }

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
      
      {children}

      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        {menuItems.map(({ label, callback }) => <MenuItem key={label} onClick={handleClick(callback)}>{label}</MenuItem>)}
        
      </Menu>
    </div>
  );
}

export default ContextMenu;
