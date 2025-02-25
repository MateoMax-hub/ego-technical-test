import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import CarDetailPresentation from "../components/CarDetailPresentation";
import Carrousel from "../components/Carrousel";
import CarExtraInfo from "../components/CarExtraInfo";
import { useFetchCarsDetails } from "../../../services/api";

const CarDetails = () => {
  const { id } = useParams();
  const { data: car, isLoading, error } = useFetchCarsDetails(id)
  
  if (isLoading) return <Typography>Cargando...</Typography>;
  if (error || !car) return <Typography>Error: {error}</Typography>;

  return (
    <Box sx={{ width: '100%', paddingTop: '80px' }}>
      <CarDetailPresentation car={car}/>
      <Carrousel car={car}/>
      <CarExtraInfo car={car}/>
    </Box>
  );
};

export default CarDetails;
