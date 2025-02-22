import { useEffect, useState } from "react";
import { fetchCarModels } from "../services/api";
import { Typography, Box } from "@mui/material";
import HomeFilters from "../components/HomeFilters";
import CarsGrid from "../components/CarsGrid";
import { Car } from "../types/carTypes";

const Home = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetchCarModels().then((data) => setCars(data as Car[]));
  }, []);

  return (
    <Box sx={{ width: '85%', marginTop: '85px', paddingBottom: '50px' }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, fontSize: '50px', marginBottom: 0 }}
        gutterBottom
      >
        Descubrí todos los modelos
      </Typography>
      <HomeFilters />
      <CarsGrid cars={cars}/>
    </Box>
  );
};

export default Home;
