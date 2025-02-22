import { Box, Tab, Tabs } from "@mui/material"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderTabs = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setValue(location.pathname === "/" ? 0 : 1);
  }, [location]); 
  
  return (
    <div className="tab_disable">
      <Box sx={{ marginLeft: '5rem' }}>
        <Tabs value={value} onChange={() => {}} textColor="inherit" TabIndicatorProps={{ style: { backgroundColor: '#EB0A1E' } }}>
          <Tab onClick={() => navigate("/")} label="Modelos" sx={{ color: value === 0 ? '#EB0A1E' : 'black', fontWeight: 600, fontSize: '14px' }}/>
          <Tab label="Ficha de modelo" sx={{ color: value === 1 ? '#EB0A1E' : 'black', fontWeight: 600, fontSize: '14px' }}/>
        </Tabs>
      </Box>
    </div>
  )
}

export default HeaderTabs
