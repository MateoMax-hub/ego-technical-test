import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Car } from "../types/carTypes";

const CarsGrid = ({cars}: {cars: Car[]}) => {
  const navigate = useNavigate();
  
  return (
    <Grid container spacing={3}>
      {cars.map((car) => (
        <Grid item xs={12} sm={6} md={3} key={car.id}>
          <Box
            sx={{
              cursor: 'pointer',
              "&:hover button[role=car_view_more_btn]": {
                opacity: 1,
                transition: '.25s',
              }
            }}
            onClick={() => navigate(`/car/${car.id}`)}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, fontSize: '28px', textAlign: 'center', color: car.starred ? '#EB0A1E' : '#000000' }}
            >
              {car.name}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 400, fontSize: '14px', textAlign: 'center' }}>
              {car.year} | ${car.price.toLocaleString()}
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '140px',
              overflow: 'hidden'
            }}>
              <img className="car_card" alt={car.name} src={car.image}></img>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '34px' }}>
              <Button
                role='car_view_more_btn'
                sx={{
                  backgroundColor: '#191919',
                  textTransform: 'none',
                  height: '34px',
                  width: '152px',
                  borderRadius: '40px',
                  opacity: 0,
                  transition: '.25s',
                }}
              >
                Ver Modelo
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default CarsGrid
