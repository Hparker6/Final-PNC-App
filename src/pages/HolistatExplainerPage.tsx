import {
  Box,
  Typography,
  Grid,
  CardContent,
  LinearProgress,
  Divider,
  Paper,
  useTheme,
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StorageIcon from '@mui/icons-material/Storage';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { AnimatedCard } from '../components/AnimatedCard';
import { HomeButton } from '../components/HomeButton';

const HolistatExplainerPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3, maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
      <HomeButton />
      
      <Box sx={{ pt: 12 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
          Understanding Your HoliStat Credit Score
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 4, maxWidth: 900 }}>
          The HoliStat Credit Score is an innovative approach to credit scoring that considers both traditional financial metrics and behavioral patterns to provide a more holistic assessment of your creditworthiness.
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
              <Typography variant="body1" sx={{ mb: 3 }}>
                The HoliStat Credit Score uses an innovative two-tower model that combines traditional financial metrics with behavioral insights to provide a more comprehensive assessment of creditworthiness.
              </Typography>
              
              {/* Visual representation of the two towers */}
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' }, 
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  gap: 4
                }}>
                  {/* Connection lines */}
                  <Box sx={{ 
                    position: 'relative',
                    display: { xs: 'none', md: 'block' },
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                  }}>
                    <svg width="100%" height="300" style={{ position: 'absolute', top: 0, left: 0 }}>
                      <path 
                        d="M100,150 C150,150 350,80 400,80" 
                        stroke={theme.palette.primary.main} 
                        strokeWidth="3" 
                        fill="none"
                      />
                      <path 
                        d="M100,150 C150,150 350,220 400,220" 
                        stroke={theme.palette.primary.main} 
                        strokeWidth="3" 
                        fill="none"
                      />
                    </svg>
                  </Box>
                  
                  {/* Tower 1 */}
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    borderRadius: 2, 
                    background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                    width: { xs: '100%', md: '45%' },
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                      <AccountBalanceIcon sx={{ fontSize: 48, color: '#1976d2', mb: 1 }} />
                      <Typography variant="h6" textAlign="center" fontWeight="bold" color="#1976d2">
                        Tower 1: Financial Profile
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2, textAlign: 'center' }}>
                      Traditional financial metrics and credit history
                    </Typography>
                  </Paper>
                  
                  {/* Tower 2 */}
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    borderRadius: 2, 
                    background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                    width: { xs: '100%', md: '45%' },
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                      <PsychologyIcon sx={{ fontSize: 48, color: '#2e7d32', mb: 1 }} />
                      <Typography variant="h6" textAlign="center" fontWeight="bold" color="#2e7d32">
                        Tower 2: Behavioral Profile
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2, textAlign: 'center' }}>
                      Behavioral patterns and non-traditional data points
                    </Typography>
                  </Paper>
                </Box>
              </Box>
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
                <Typography variant="h6">HoliStat Unified Credit Score (UCS)</Typography>
              </Box>
              
              {/* Visual for Unified Score */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                my: 3 
              }}>
                <Paper elevation={3} sx={{ 
                  p: 4, 
                  borderRadius: '50%', 
                  width: 200, 
                  height: 200, 
                  display: 'flex',
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
                  position: 'relative'
                }}>
                  <Typography variant="h3" color="#9c27b0" fontWeight="bold">
                    745
                  </Typography>
                  <Typography variant="body2" color="#9c27b0" fontWeight="medium" textAlign="center">
                    Your HoliStat Credit Score
                  </Typography>
                  
                  {/* Decorative rings */}
                  <Box sx={{ 
                    position: 'absolute', 
                    top: -15, 
                    left: -15, 
                    width: 230, 
                    height: 230, 
                    borderRadius: '50%', 
                    border: '2px dashed #9c27b0',
                    opacity: 0.6
                  }} />
                  <Box sx={{ 
                    position: 'absolute', 
                    top: -30, 
                    left: -30, 
                    width: 260, 
                    height: 260, 
                    borderRadius: '50%', 
                    border: '2px dashed #9c27b0',
                    opacity: 0.3
                  }} />
                </Paper>
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
              <Typography variant="subtitle2" gutterBottom>
                How it Benefits You
              </Typography>
              <Typography variant="body2">
                This approach allows the HoliStat Credit Score to provide a more nuanced assessment of your creditworthiness, especially if you have a limited credit history or if your financial situation doesn't fit traditional models.
              </Typography>
              <Box sx={{ mt: 4, p: 2, bgcolor: 'rgba(156,39,176,0.1)', borderRadius: 2 }}>
                <Typography variant="subtitle2" color="#9c27b0" gutterBottom>
                  Why the HoliStat Credit Score is different
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#9c27b0', mr: 1 }} />
                    <Typography variant="body2">More holistic view of financial health</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#9c27b0', mr: 1 }} />
                    <Typography variant="body2">Values consistency and responsible behavior</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#9c27b0', mr: 1 }} />
                    <Typography variant="body2">Provides opportunities for those with limited credit history</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#9c27b0', mr: 1 }} />
                    <Typography variant="body2">Considers your full financial potential</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </AnimatedCard>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default HolistatExplainerPage;
