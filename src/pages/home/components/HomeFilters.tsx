import { Box, Divider } from "@mui/material"
import CarsFilter from "./CarsFilter"
import OrderFilter from "./OrderFilter"
import { FiltersToApiResponseEnum } from "../../../constants/FiltersEnum";
import { OrderFilterType } from "../../../types/carTypes";

const HomeFilters = ({
  carFilterSelected,
  setCarFilterSelected,
  setOrder
}: {
  carFilterSelected: FiltersToApiResponseEnum;
  setCarFilterSelected: React.Dispatch<React.SetStateAction<FiltersToApiResponseEnum>>;
  setOrder: React.Dispatch<React.SetStateAction<OrderFilterType>>;

}) => {
  return (
    <Box sx={{ marginTop: '72px', marginBottom: '75px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', height:'41px', alignItems: 'center' }}>
        <CarsFilter carFilterSelected={carFilterSelected} setCarFilterSelected={setCarFilterSelected}/>
        <OrderFilter setOrder={setOrder}/>
      </Box>
      <Divider />
    </Box>
  )
}

export default HomeFilters
