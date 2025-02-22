import { Box, Typography } from "@mui/material"

const CarDetailPresentation = ({car}: {car: any}) => {
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
          <img className="car_card" src={car.detailedImage || car.image} alt={car.name} />
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
              Preparada para cualquier desafío
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>
              Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default CarDetailPresentation
