import { Box, Button, Menu, MenuItem, Typography } from "@mui/material"
import { FiltersEnum } from "../constants/FiltersEnum"
import { useState } from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CarsFilter = () => {
  const [filterSelected, setFilterSelected] = useState<FiltersEnum>(FiltersEnum.ALL)
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="home_filters">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>Filtrar por</Typography>
            {Object.values(FiltersEnum).map(text => (
              <Typography
                key={text}
                onClick={() => setFilterSelected(text)}
                sx={{
                  marginLeft: '50px',
                  cursor: "pointer",
                  fontWeight: filterSelected === text ? 500 : 400,
                  color: filterSelected === text ? "black" : "#373737",
                  "&:hover": { color: "black" },
                }}
              >
                {text}
              </Typography>
            ))}
        </Box>
      </div>
      <div className="home_filters_arrow">
        <Button
          id="filter-btn"
          aria-controls={open ? 'filter-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ color: '#373737', fontWeight: 600, fontSize: '14px', lineHeight: '14px', textTransform: 'none' }}
        >
          Filtrar por
          <ArrowDropDownIcon />
        </Button>
        <Menu
          id="filter-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'filter-btn',
          }}
        >
          {Object.values(FiltersEnum).map(text => <MenuItem onClick={handleClose}>{text}</MenuItem>)}
        </Menu>
      </div>
    </>
  )
}

export default CarsFilter
