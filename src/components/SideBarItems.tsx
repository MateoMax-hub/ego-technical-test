import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { SideBarEnum } from "../constants/SideBarItemsEnum"
import CloseIcon from '@mui/icons-material/Close';

const SideBarItems = ({text}: {text: string}) => {
  if (text === SideBarEnum.CLOSE) return (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemText primary={text} primaryTypographyProps={{ fontSize: '14px', textAlign: 'right' }} />
        <ListItemIcon sx={{ minWidth: 0, marginLeft: '0.70rem' }}>
          <CloseIcon />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  )
  return (
    <ListItem key={text} disablePadding sx={{ paddingRight: '3.3rem' }}>
      <ListItemButton sx={{ paddingBottom: '13px', paddingTop: 0 }}>
        <ListItemText primary={text} primaryTypographyProps={{ fontSize: '20px', textAlign: 'right' }} />
      </ListItemButton>
    </ListItem>
  )
}

export default SideBarItems
