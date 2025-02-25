import { Box, Typography } from "@mui/material"
import { CarDetail } from "../../../types/carTypes"

const CarDetailPresentation = ({car}: {car: CarDetail}) => {
  return (
    <div
      className="cardDetailPresentationContainer"
    >
      <div className="cardDetailPresentation">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '350px',
            overflow: 'hidden',
            "& img": {
              width: '100%'
            }
          }}
        >
          <img className="car_card" src={car.photo || car.thumbnail} alt={car.name} />
        </Box>
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '2rem'
          }}
        >
          <Box sx={{ width: '475px'}}>
            <Typography sx={{ fontWeight: 600, fontSize: '20px', marginBottom: '8px' }}>{car.name}</Typography>
            <Typography sx={{ fontWeight: 600, fontSize: '50px', lineHeight: '57px', marginBottom: '37px' }}>
              {car.title}
            </Typography>
            <Typography dangerouslySetInnerHTML={{ __html: car.description }} sx={{ fontWeight: 400, fontSize: '16px' }} />
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default CarDetailPresentation
