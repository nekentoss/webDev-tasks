import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import FilmRating from '../FilmRating/FilmRating';

const FilmCard = ({ 
  film, 
  onClick, 
  showRelationType = false,
  width = 280,
  smallSize = false,
}) => {
  const posterHeight = Math.round(width * 40 / 27);
  const contentHeight = smallSize ? 80 : 140;
  const height = posterHeight + contentHeight;
  const name = film?.nameRu || film?.name || 'Название недоступно';
  const year = film?.year || 'N/A';
  const rating = film?.ratingKinopoisk || film?.rating;
  const poster = film?.posterUrlPreview || film?.poster || 'https://via.placeholder.com/300x450';
  const relationType = film?.relationType;

  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: width }}>
      <Card
        onClick={onClick}
        sx={{
          cursor: 'pointer',
          height,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          height={posterHeight}
          image={poster}
          alt={name}
          sx={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <CardContent sx={{ p: smallSize ? 0.5 : 1.5, pt: smallSize ? 0.5 : 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h6"
            sx={{
              mb: 0.5,
              fontSize: smallSize ? '0.75rem' : '0.95rem',
              fontWeight: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, fontSize: smallSize ? '0.7rem' : '0.85rem' }}>
            {year}
          </Typography>
          {smallSize && relationType && showRelationType && (
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', fontSize: '0.65rem' }}>
              {relationType}
            </Typography>
          )}
          <FilmRating rating={rating} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default FilmCard;
