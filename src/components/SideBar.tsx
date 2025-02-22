import { Box, Divider, Drawer, IconButton, List, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { SideBarEnum, SideBarItemsEnum, SideBarLastItemsEnum, SideBarSecondItemsEnum } from "../constants/SideBarItemsEnum";
import SideBarItems from "./SideBarItems";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <SideBarItems text={SideBarEnum.CLOSE}/>
        {Object.values(SideBarItemsEnum).map((text) => <SideBarItems text={text}/>)}
      </List>
      <Divider />
      <List>
        {Object.values(SideBarSecondItemsEnum).map((text) => <SideBarItems text={text}/>)}
      </List>
      <Divider />
      <List>
        {Object.values(SideBarLastItemsEnum).map((text) => <SideBarItems text={text}/>)}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        color="inherit"
        onClick={toggleDrawer(true)}
        edge="start"
        sx={[
          {
            mr: 2,
          },
          open && { display: 'none' },
        ]}
        >
        <Typography sx={{ mr: '12px' }}>Menú</Typography>
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          "& .MuiBox-root[role=presentation]": { width: '24.375rem' }
        }}
        anchor={'right'} 
        open={open} 
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </>
  );
};

export default SideBar;
