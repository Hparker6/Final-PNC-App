import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

export const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      startIcon={<HomeIcon />}
      onClick={() => navigate('/')}
      sx={{
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      Home
    </Button>
  );
};
