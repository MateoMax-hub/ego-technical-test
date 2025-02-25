import Slider from 'react-slick';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { CarDetail } from '../../../types/carTypes';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Carrousel = ({car}: {car: CarDetail}) => {
  return (
    <Box sx={{ width: '80%', margin: 'auto' }}>
      <Slider {...settings}>
        {car.model_features?.map((feature, i) => (
          <div key={`feature-${i}`}>
            <Card sx={{ maxWidth: 345, paddingX: '10px', boxShadow: 'none' }}>
              <CardMedia
                component="img"
                height="140"
                image={feature.image}
                alt={feature.name}
                sx={{ borderRadius: '6px' }}
              />
              <CardContent sx={{ minHeight: '140px' }}>
                <Typography variant="h6">{feature.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Box>
  )
}

export default Carrousel
