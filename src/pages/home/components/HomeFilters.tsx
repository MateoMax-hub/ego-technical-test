import { Box, Divider } from "@mui/material"
import CarsFilter from "./CarsFilter"
import OrderFilter from "./OrderFilter"

const HomeFilters = () => {
  return (
    <Box sx={{ marginTop: '72px', marginBottom: '75px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', height:'41px', alignItems: 'center' }}>
        <CarsFilter />
        <OrderFilter />
      </Box>
      <Divider />
    </Box>
  )
}

export default HomeFilters
