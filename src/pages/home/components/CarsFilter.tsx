import { Box, Button, Menu, MenuItem, Typography } from "@mui/material"
import { useState } from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FiltersEnum, FiltersToApiResponseEnum } from "../../../constants/FiltersEnum";

const CarsFilter = ({
  carFilterSelected,
  setCarFilterSelected
}: {
  carFilterSelected: FiltersToApiResponseEnum;
  setCarFilterSelected: React.Dispatch<React.SetStateAction<FiltersToApiResponseEnum>>
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (filter: FiltersToApiResponseEnum) => {
    setCarFilterSelected(filter)
    setAnchorEl(null);
  };

  return (
    <>
      <div className="home_filters">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>Filtrar por</Typography>
            {Object.entries(FiltersEnum).map(([key, text]) => (
              <Typography
                key={text}
                onClick={() => setCarFilterSelected(FiltersToApiResponseEnum[key as keyof typeof FiltersToApiResponseEnum])}
                sx={{
                  marginLeft: '50px',
                  cursor: "pointer",
                  fontWeight: carFilterSelected === FiltersToApiResponseEnum[key as keyof typeof FiltersToApiResponseEnum] ? 500 : 400,
                  color: carFilterSelected === FiltersToApiResponseEnum[key as keyof typeof FiltersToApiResponseEnum] ? "black" : "#373737",
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
          {Object.entries(FiltersEnum).map(([key, text]) => <MenuItem onClick={() => handleSelect(FiltersToApiResponseEnum[key as keyof typeof FiltersToApiResponseEnum])}>{text}</MenuItem>)}
        </Menu>
      </div>
    </>
  )
}

export default CarsFilter
