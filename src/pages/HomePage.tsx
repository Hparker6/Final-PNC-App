import { Box, Typography, Grid, CardContent, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, LinearProgress } from '@mui/material';
import { AnimatedCard } from '../components/AnimatedCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';
import SendIcon from '@mui/icons-material/Send';
import SchoolIcon from '@mui/icons-material/School';
import SavingsIcon from '@mui/icons-material/Savings';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useNavigate } from 'react-router-dom';

const accountsData = [
  {
    type: 'Checking',
    name: 'Virtual Wallet',
    balance: 5234.56,
    accountNumber: '****1234',
    icon: AccountBalanceIcon,
  },
  {
    type: 'Savings',
    name: 'Growth Account',
    balance: 12456.78,
    accountNumber: '****5678',
    icon: SavingsIcon,
  },
  {
    type: 'Credit',
    name: 'Cash Rewards Visa',
    balance: 1234.56,
    limit: 10000,
    accountNumber: '****9012',
    icon: CreditCardIcon,
  },
];

const recentTransactions = [
  { date: '03/20/2025', description: 'Target', amount: -85.43, type: 'Purchase' },
  { date: '03/19/2025', description: 'Direct Deposit - COMPANY LLC', amount: 2750.00, type: 'Deposit' },
  { date: '03/19/2025', description: 'Starbucks', amount: -5.65, type: 'Purchase' },
  { date: '03/18/2025', description: 'ATM Withdrawal', amount: -100.00, type: 'Withdrawal' },
  { date: '03/18/2025', description: 'Amazon.com', amount: -32.99, type: 'Purchase' },
];

const recommendedCards = [
  {
    name: 'PNC Cash Unlimited',
    image: 'https://placehold.co/400x250/1a1a1a/ffffff?text=PNC+Cash+Unlimited',
    apr: '0% Intro APR for 15 months',
    rewards: 'Unlimited 1.5% cash back on all purchases',
    creditScore: '700+',
    annualFee: '$0',
    backgroundColor: '#1a1a1a',
  },
  {
    name: 'PNC Cash Rewards® Visa®',
    image: 'https://placehold.co/400x250/006940/ffffff?text=PNC+Cash+Rewards',
    apr: '0% Intro APR for 12 months',
    rewards: '4% cash back on gas, 3% on dining, 2% on groceries',
    creditScore: '670+',
    annualFee: '$0',
    backgroundColor: '#006940',
  },
];

const quickActions = [
  { icon: PaymentsIcon, label: 'Pay Bills', path: '/bills' },
  { icon: SendIcon, label: 'Transfer Money', path: '/transfer' },
  { icon: AccountBalanceIcon, label: 'Statements', path: '/statements' },
  { icon: CreditScoreIcon, label: 'Credit Score', path: '/credit-score' },
  { icon: AccountBalanceWalletIcon, label: 'Financial Services', path: '/financial-services' },
  { icon: SchoolIcon, label: 'eLearning', path: '/elearning' },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ p: 3, maxWidth: 1400, margin: '0 auto', width: '100%', flex: 1 }}>
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h4">
              Welcome, Michael Johnson
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/holistat-explainer')}
              sx={{ ml: 2 }}
            >
              Learn about Holistat Score
            </Button>
          </Box>
          
          {/* Quick Actions */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {quickActions.map((action) => (
              <Grid item xs={6} sm={4} md={2} key={action.label}>
                <AnimatedCard 
                  onClick={() => navigate(action.path)}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    p: 2,
                    height: 120,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <action.icon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                    <Typography variant="body2">{action.label}</Typography>
                  </CardContent>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>

          {/* Account Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {accountsData.map((account) => (
              <Grid item xs={12} md={4} key={account.name}>
                <AnimatedCard onClick={() => navigate(`/account/${account.type.toLowerCase()}`)} sx={{ height: '100%' }}>
                  <CardContent sx={{ 
                    p: 3, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: 250,
                    '& > *': { mb: 2 },
                    '& > *:last-child': { mb: 0 }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <account.icon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                      <Typography variant="h6">{account.name}</Typography>
                    </Box>
                    <Typography variant="h4">
                      ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </Typography>
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <Typography color="textSecondary">
                        {account.type} Account
                      </Typography>
                      <Typography color="textSecondary">
                        Account Number: {account.accountNumber}
                      </Typography>
                      {account.limit && (
                        <Typography color="textSecondary">
                          Credit Limit: ${account.limit.toLocaleString()}
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>

          {/* Recent Transactions */}
          <AnimatedCard sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Transactions
              </Typography>
              <TableContainer component={Paper} elevation={0}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentTransactions.map((transaction, index) => (
                      <TableRow key={index}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell 
                          align="right"
                          sx={{ 
                            color: transaction.amount < 0 ? 'error.main' : 'success.main',
                            fontWeight: 500
                          }}
                        >
                          ${Math.abs(transaction.amount).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button 
                  color="primary"
                  onClick={() => navigate('/transactions')}
                >
                  View All Transactions
                </Button>
              </Box>
            </CardContent>
          </AnimatedCard>

          {/* Recommended Cards */}
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Recommended for You
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {recommendedCards.map((card) => (
              <Grid item xs={12} sm={6} key={card.name}>
                <AnimatedCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {card.name}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        APR: {card.apr}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Rewards: {card.rewards}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Recommended Credit Score: {card.creditScore}
                      </Typography>
                    </Box>
                    <Button variant="contained" color="primary" fullWidth>
                      Learn More
                    </Button>
                  </CardContent>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>

          {/* Holistat Score Section */}
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Your Holistat Score
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <AnimatedCard>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AnalyticsIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                    <Typography variant="h6">Two-Tower Credit Scoring Model</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 3 }}>
                    Your Holistat Score combines traditional financial metrics with behavioral insights for a comprehensive creditworthiness assessment.
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>

            {/* Tower 1 Section */}
            <Grid item xs={12} md={6}>
              <AnimatedCard>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccountBalanceIcon sx={{ fontSize: 32, color: '#2196f3', mr: 1 }} />
                    <Typography variant="h6">Financial Profile</Typography>
                  </Box>
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
              <AnimatedCard>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PsychologyIcon sx={{ fontSize: 32, color: '#4caf50', mr: 1 }} />
                    <Typography variant="h6">Behavioral Profile</Typography>
                  </Box>
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
          </Grid>
        </Box>
      </Box>

      {/* Footer */}
      <Box 
        component="footer" 
        sx={{ 
          mt: 'auto',
          py: 3,
          px: 2,
          backgroundColor: 'primary.main',
          color: 'white'
        }}
      >
        <Box sx={{ maxWidth: 1400, margin: '0 auto' }}>
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
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('/financial-services'); }}>Financial Services</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('/credit-score'); }}>Credit Score</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('/elearning'); }}>Financial Education</a>
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
              &copy; {new Date().getFullYear()} The PNC Financial Services Group, Inc. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
