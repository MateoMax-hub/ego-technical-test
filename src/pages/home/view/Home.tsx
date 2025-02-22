import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { fetchCarModels } from "../../../services/api";
import { Car } from "../../../types/carTypes";
import HomeFilters from "../components/HomeFilters";
import CarsGrid from "../components/CarsGrid";

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
