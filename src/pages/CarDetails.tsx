import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCarModels } from "../services/api";
import { Typography, Box } from "@mui/material";
import CarDetailPresentation from "../components/CarDetailPresentation";
import Carrousel from "../components/Carrousel";
import CarExtraInfo from "../components/CarExtraInfo";
import { Car } from "../types/carTypes";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car | undefined>(undefined);

  useEffect(() => {
    fetchCarModels().then((data) => {
      const foundCar = (data as Car[]).find((c) => c.id === parseInt(id || "0"));
      setCar(foundCar);
    });
  }, [id]);

  if (!car) return <Typography>Cargando...</Typography>;

  return (
    <Box sx={{ width: '100%', paddingTop: '80px' }}>
      <CarDetailPresentation car={car}/>
      <Carrousel />
      <CarExtraInfo />
    </Box>
  );
};

export default CarDetails;
