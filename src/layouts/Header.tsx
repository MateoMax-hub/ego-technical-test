import { AppBar, Box, Toolbar } from "@mui/material"
import Logo from "../components/Logo"
import HeaderTabs from "../components/HeaderTabs"
import SideBar from "../components/SideBar"

const Header = () => {
  return (
    <AppBar position="static" sx={{boxShadow: 'none', height: '4.37rem'}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex'}}>
          <Logo />
          <HeaderTabs />
        </Box>
        <Box>
          <SideBar />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
