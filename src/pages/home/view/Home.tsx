import { Typography, Box } from "@mui/material";
import { useFetchCars } from "../../../services/api";
import HomeFilters from "../components/HomeFilters";
import CarsGrid from "../components/CarsGrid";
import { useEffect, useState } from "react";
import { FiltersToApiResponseEnum } from "../../../constants/FiltersEnum";
import { Car, OrderFilterType } from "../../../types/carTypes";

const Home = () => {
  const { data: cars, isLoading, error } = useFetchCars()
  const [carFilterSelected, setCarFilterSelected] = useState<FiltersToApiResponseEnum>(FiltersToApiResponseEnum.ALL)
  const [order, setOrder] = useState<OrderFilterType>({})
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);

  useEffect(() => {
    if (!cars) return;

    let updatedCars = [...cars];

    if (carFilterSelected !== FiltersToApiResponseEnum.ALL) {
      if (carFilterSelected === FiltersToApiResponseEnum.SUVS_AND_CROSSOVERS) {
        updatedCars = updatedCars.filter(car => car.segment === FiltersToApiResponseEnum.HATCHBACK || car.segment === FiltersToApiResponseEnum.SUVS);
      } else {
        updatedCars = updatedCars.filter(car => car.segment === carFilterSelected);
      }
    }

    if (order.field && order.order) {
      updatedCars.sort((a, b) => {
        const valueA = a[order.field as keyof Car];
        const valueB = b[order.field as keyof Car];

        if (order.order === "asc") {
          return valueA > valueB ? 1 : -1;
        } else {
          return valueA < valueB ? 1 : -1;
        }
      });
    }
    setFilteredCars(updatedCars);
  }, [cars, carFilterSelected, order]);

  return (
    <Box sx={{ width: '85%', marginTop: '85px', paddingBottom: '50px' }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, fontSize: '50px', marginBottom: 0 }}
        gutterBottom
      >
        Descubrí todos los modelos
      </Typography>
      <HomeFilters carFilterSelected={carFilterSelected} setCarFilterSelected={setCarFilterSelected} setOrder={setOrder}/>
      <CarsGrid cars={filteredCars} isLoading={isLoading} error={error}/>
    </Box>
  );
};

export default Home;
