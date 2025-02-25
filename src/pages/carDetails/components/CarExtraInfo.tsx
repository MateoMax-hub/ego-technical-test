import { Box, Typography } from "@mui/material"
import { CarDetail } from "../../../types/carTypes"

const CarExtraInfo = ({car}: {car: CarDetail}) => {
  return (
    <div className="carExtraInfo">
      {car.model_highlights.map((highlight, index) => (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}>
          <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingX: '1rem' }}>
            <Box sx={{ width: '390px' }}>
              <Typography sx={{ fontWeight: 600, fontSize: '20px' }}>{highlight.title}</Typography>
              <Typography sx={{ fontWeight: 400, fontSize: '16px' }} dangerouslySetInnerHTML={{ __html: highlight.content }} />
            </Box>
          </Box>
          <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 1 % 2 === 0 ? "row" : "row-reverse" }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '350px',
                overflow: 'hidden',
                "& img": {
                  width: '100%'
                }
              }}
            >
              <img className="car_card" alt={highlight.image} src={highlight.image}></img>
            </Box>
          </Box>
        </Box>
      ))}
    </div>
  )
}

export default CarExtraInfo
