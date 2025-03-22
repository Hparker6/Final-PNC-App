import {
  Box,
  Typography,
  Grid,
  CardContent,
  LinearProgress,
  Divider,
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StorageIcon from '@mui/icons-material/Storage';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { AnimatedCard } from '../components/AnimatedCard';
import { HomeButton } from '../components/HomeButton';

const HolistatExplainerPage = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
      <HomeButton />
      
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Understanding Your Holistat Score
      </Typography>

      {/* Overview Section */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AnalyticsIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h5">Two-Tower Credit Scoring Model</Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                The Holistat Score uses an innovative two-tower model that combines traditional financial metrics with behavioral insights to provide a more comprehensive assessment of creditworthiness.
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>

        {/* Tower 1 Section */}
        <Grid item xs={12} md={6}>
          <AnimatedCard sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountBalanceIcon sx={{ fontSize: 32, color: '#2196f3', mr: 1 }} />
                <Typography variant="h6">Tower 1: Financial Profile Encoder (FPE)</Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  Data Sources
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Structured financial data from Plaid
                  • Parchment verified records
                  • Traditional financial documentation
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <StorageIcon sx={{ color: '#2196f3', mr: 1 }} />
                  <Typography variant="subtitle2">Database: Relational (SQL)</Typography>
                </Box>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Key Metrics
              </Typography>
              <Grid container spacing={2}>
                {[
                  { name: 'Asset-to-Debt Ratio', value: 85 },
                  { name: 'Income Stability', value: 92 },
                  { name: 'Payment History', value: 88 },
                  { name: 'Investment Profile', value: 78 },
                ].map((metric) => (
                  <Grid item xs={12} key={metric.name}>
                    <Typography variant="body2" gutterBottom>
                      {metric.name}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={metric.value}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: '#e3f2fd',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: '#2196f3',
                          borderRadius: 4,
                        },
                      }}
                    />
                    <Typography variant="caption" color="textSecondary">
                      {metric.value}%
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </AnimatedCard>
        </Grid>

        {/* Tower 2 Section */}
        <Grid item xs={12} md={6}>
          <AnimatedCard sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PsychologyIcon sx={{ fontSize: 32, color: '#4caf50', mr: 1 }} />
                <Typography variant="h6">Tower 2: Behavioral & Lifestyle Encoder (BLE)</Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  Data Sources
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Vector-based alternative data
                  • Lifestyle patterns
                  • Employer recommendations
                  • Behavioral insights
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <StorageIcon sx={{ color: '#4caf50', mr: 1 }} />
                  <Typography variant="subtitle2">Database: Vector Database</Typography>
                </Box>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Behavioral Metrics
              </Typography>
              <Grid container spacing={2}>
                {[
                  { name: 'Financial Responsibility', value: 90 },
                  { name: 'Lifestyle Stability', value: 85 },
                  { name: 'Employment History', value: 95 },
                  { name: 'Behavioral Consistency', value: 88 },
                ].map((metric) => (
                  <Grid item xs={12} key={metric.name}>
                    <Typography variant="body2" gutterBottom>
                      {metric.name}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={metric.value}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: '#e8f5e9',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: '#4caf50',
                          borderRadius: 4,
                        },
                      }}
                    />
                    <Typography variant="caption" color="textSecondary">
                      {metric.value}%
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </AnimatedCard>
        </Grid>

        {/* Unified Credit Score Section */}
        <Grid item xs={12}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IntegrationInstructionsIcon sx={{ fontSize: 32, color: '#9c27b0', mr: 1 }} />
                <Typography variant="h6">Unified Credit Score (UCS)</Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Dynamic Weighting System
                  </Typography>
                  <Typography variant="body2" paragraph>
                    The UCS combines financial stability and behavioral reliability scores using an adaptive weighting system that adjusts based on the availability and quality of financial history data.
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Current Weight Distribution
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ flexGrow: 1, mr: 2 }}>
                        <LinearProgress
                          variant="determinate"
                          value={60}
                          sx={{
                            height: 20,
                            borderRadius: 2,
                            bgcolor: '#e8f5e9',
                            '& .MuiLinearProgress-bar': {
                              bgcolor: '#2196f3',
                              borderRadius: 2,
                            },
                          }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ minWidth: 60 }}>
                        60% FPE
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ flexGrow: 1, mr: 2 }}>
                        <LinearProgress
                          variant="determinate"
                          value={40}
                          sx={{
                            height: 20,
                            borderRadius: 2,
                            bgcolor: '#e8f5e9',
                            '& .MuiLinearProgress-bar': {
                              bgcolor: '#4caf50',
                              borderRadius: 2,
                            },
                          }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ minWidth: 60 }}>
                        40% BLE
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Advanced Features
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Exponential Recency Weighting
                    </Typography>
                    <Typography variant="body2">
                      • Prioritizes last 5 years of financial behavior
                      • Rewards consistent responsible habits
                      • Mitigates impact of short-term mistakes
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      AI-Driven NLP Analysis
                    </Typography>
                    <Typography variant="body2">
                      • Tokenizes and assesses qualitative data
                      • Processes recommendation letters
                      • Evaluates employer feedback
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </AnimatedCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HolistatExplainerPage;
