import { Box, Typography } from "@mui/material"

const CarExtraInfo = () => {
  return (
    <div className="carExtraInfo">
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '1rem' }}>
          <Box sx={{ width: '390px' }}>
            <Typography sx={{ fontWeight: 600, fontSize: '20px' }}>Titulo de 20 px</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: '16px' }} >
              Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
            <img className="car_card" alt="descripcion_1" src="/assets/descripcion_1.png"></img>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '350px',
              overflow: 'hidden',
              "& img": {
                width: '100%',
                borderRadius: '6px'
              }
            }}
          >
            <img className="car_card" alt="descripcion_1" src="/assets/descripcion_2.png"></img>
          </Box>
        </Box>
        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '1rem' }}>
          <Box sx={{ width: '390px' }}>
            <Typography sx={{ fontWeight: 600, fontSize: '20px' }}>Titulo de 20 px</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>
              Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default CarExtraInfo
