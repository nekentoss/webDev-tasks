import { Rating, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const FilmRating = ({ rating, size = 'small' }) => {
  const fontSize = size === 'large' ? '32px' : '20px';
  const typographySize = size === 'large' ? '20px' : '14px';
  const ratingValue = rating !== null && rating !== undefined ? Number(rating) : 0;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: 0.5 }}>
      <Rating
        value={Math.round(ratingValue * 2) / 2}
        max={10}
        precision={0.5}
        readOnly
        sx={{
          '& .MuiRating-icon': { fontSize, lineHeight: 1 },
          '& .MuiRating-iconEmpty': { fontSize, lineHeight: 1 },
          '& .MuiRating-iconFilled': { fontSize, lineHeight: 1 },
          '& .MuiRating-decimal': { fontSize, lineHeight: 1, opacity: 1 },
        }}
        icon={<StarIcon fontSize="inherit" sx={{ color: '#f5c518' }} />}
        emptyIcon={<StarIcon fontSize="inherit" sx={{ color: '#bdbdbd' }} />}
      />
      <Typography sx={{ ml: 1, fontSize: typographySize, fontWeight: 500 }}>
        {rating ? `${rating}` : 'N/A'}
      </Typography>
    </Box>
  );
};

export default FilmRating;
