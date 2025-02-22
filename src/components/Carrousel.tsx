import Slider from 'react-slick';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { CARROUSEL_CARDS } from '../constants/cars';

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

const Carrousel = () => {
  return (
    <Box sx={{ width: '80%', margin: 'auto' }}>
    <Slider {...settings}>
      {CARROUSEL_CARDS.map((card) => (
        <div key={card.id}>
          <Card sx={{ maxWidth: 345, paddingX: '10px', boxShadow: 'none' }}>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
              sx={{ borderRadius: '6px' }}
            />
            <CardContent sx={{ minHeight: '140px' }}>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
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
