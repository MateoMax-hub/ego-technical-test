import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const OrderFilter = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="order-btn"
        aria-controls={open ? 'order-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: '#373737', fontWeight: 600, fontSize: '14px', lineHeight: '14px', textTransform: 'none'}}
      >
        Ordenar por
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="order-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'order-btn',
        }}
      >
        <MenuItem onClick={handleClose}><p>Nada</p></MenuItem>
        <MenuItem onClick={handleClose}><p>De <b>menor</b> a <b>mayor</b> precio</p></MenuItem>
        <MenuItem onClick={handleClose}><p>De <b>mayor</b> a <b>menor</b> precio</p></MenuItem>
        <MenuItem onClick={handleClose}><p>Mas <b>nuevos</b> primero</p></MenuItem>
        <MenuItem onClick={handleClose}><p>Mas <b>viejos</b> primero</p></MenuItem>
      </Menu>
    </div>
  )
}

export default OrderFilter
