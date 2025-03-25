import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

export const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      startIcon={<HomeIcon />}
      onClick={() => navigate('/')}
      sx={{
        position: 'absolute',
        top: 64, // adjusted top position to prevent overlay with page titles
        left: 16,
        zIndex: 1000,
        bgcolor: '#F58025', // updated to website's primary orange color
        color: 'black', // added black text color
        '&:hover': {
          bgcolor: '#F58025', // updated to website's primary orange color
          color: 'black',
        },
      }}
    >
      Home
    </Button>
  );
};
