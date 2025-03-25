import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Container,
  Paper,
  InputAdornment,
  Divider,
  Link,
  IconButton,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // If already authenticated, redirect to home
    if (localStorage.getItem('isAuthenticated') === 'true') {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'User1234' && password === '1234') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/', { replace: true });
    } else {
      setError('Invalid username or password');
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #e9f0f7 100%)',
      }}
    >
      {/* Header with PNC branding */}
      <Box 
        sx={{ 
          p: 2, 
          bgcolor: '#fff', 
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ maxWidth: 1200, width: '100%', display: 'flex', alignItems: 'center' }}>
          <img
            src="/pnc-logo.png"
            alt="PNC Logo"
            style={{ height: '40px' }}
          />
        </Box>
      </Box>

      {/* Main content */}
      <Box 
        sx={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          p: 3
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={0} sx={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2, overflow: 'hidden' }}>
            {/* Left Side - Image/Branding */}
            <Grid 
              item 
              xs={12} 
              md={5} 
              sx={{ 
                backgroundColor: '#0069AA', 
                color: 'white',
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                justifyContent: 'center',
                p: 5,
                position: 'relative'
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
                  Welcome to HoliStat
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                  Your comprehensive financial management platform
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#F58025' }} />
                    <Typography variant="body2">Track your spending habits</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#F58025' }} />
                    <Typography variant="body2">Manage your accounts securely</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#F58025' }} />
                    <Typography variant="body2">Get personalized financial insights</Typography>
                  </Box>
                </Box>
              </Box>
              {/* Background Elements */}
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 20, 
                  right: 20, 
                  width: 120, 
                  height: 120, 
                  borderRadius: '50%', 
                  background: 'rgba(248, 157, 34, 0.2)' 
                }} 
              />
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: 30, 
                  left: -30, 
                  width: 80, 
                  height: 80, 
                  borderRadius: '50%', 
                  background: 'rgba(248, 157, 34, 0.2)' 
                }} 
              />
            </Grid>

            {/* Right Side - Login Form */}
            <Grid item xs={12} md={7} component={Paper} square sx={{ p: { xs: 3, md: 5 }, bgcolor: 'white' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <img
                  src="/pnc-logo.png"
                  alt="PNC Logo"
                  style={{ height: '50px', display: 'block', margin: '0 auto' }}
                />
              </Box>
              <Typography variant="h5" component="h1" sx={{ mb: 1, fontWeight: 600 }}>
                Sign in to your account
              </Typography>
              <Typography color="textSecondary" sx={{ mb: 4 }}>
                Enter your credentials to access your dashboard
              </Typography>

              <form onSubmit={handleLogin}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                  <Link href="#" underline="hover" variant="body2">
                    Forgot password?
                  </Link>
                </Box>
                {error && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                  </Alert>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ 
                    py: 1.5, 
                    bgcolor: '#F58025', 
                    '&:hover': { bgcolor: '#E06B1F' }, 
                    mb: 3,
                    fontWeight: 600
                  }}
                >
                  Sign In
                </Button>
                <Divider sx={{ my: 3 }}>
                  <Typography variant="body2" color="textSecondary" sx={{ color: '#0069AA' }}>
                    OR
                  </Typography>
                </Divider>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Don't have an account?
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    size="large"
                    sx={{ 
                      borderColor: '#0069AA', 
                      color: '#0069AA',
                      '&:hover': { borderColor: '#005591', bgcolor: 'rgba(0, 105, 170, 0.05)' }
                    }}
                  >
                    Create Account
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          p: 2, 
          bgcolor: '#0069AA', 
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          color: 'white'
        }}
      >
        <Typography variant="body2">
          {new Date().getFullYear()} The PNC Financial Services Group, Inc. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
