import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        mt: 'auto',
        py: 3,
        px: 2,
        backgroundColor: '#F58025',
        color: 'white',
        width: '100%'
      }}
    >
      <Box sx={{ maxWidth: 1200, margin: '0 auto' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              PNC Bank
            </Typography>
            <Typography variant="body2">
              The PNC Financial Services Group, Inc.
              <br />
              300 Fifth Avenue
              <br />
              Pittsburgh, PA 15222
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" component="div">
              <Box sx={{ '& > *': { display: 'block', mb: 1, color: 'inherit', textDecoration: 'none' } }}>
                <Link 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); navigate('/financial-services'); }}
                  color="inherit"
                  underline="hover"
                >
                  Financial Services
                </Link>
                <Link 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); navigate('/elearning'); }}
                  color="inherit"
                  underline="hover"
                >
                  eLearning
                </Link>
                <Link 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); navigate('/credit-score'); }}
                  color="inherit"
                  underline="hover"
                >
                  Credit Score
                </Link>
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              1-888-PNC-BANK (1-888-762-2265)
              <br />
              Monday - Friday: 7:00 AM - 10:00 PM ET
              <br />
              Saturday - Sunday: 8:00 AM - 5:00 PM ET
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; {currentYear} The PNC Financial Services Group, Inc. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
