import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  CardContent,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
} from '@mui/material';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import SendIcon from '@mui/icons-material/Send';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SavingsIcon from '@mui/icons-material/Savings';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { AnimatedCard } from '../components/AnimatedCard';

const accountsData = [
  {
    type: 'Checking',
    name: 'Virtual Wallet',
    balance: 78234.56,
    accountNumber: '****1234',
    icon: AccountBalanceWalletIcon,
    color: '#1976d2',
  },
  {
    type: 'Savings',
    name: 'Growth Account',
    balance: 342456.78,
    accountNumber: '****5678',
    icon: SavingsIcon,
    color: '#2e7d32',
  },
  {
    type: 'Credit',
    name: 'Cash Rewards Visa Signature',
    balance: 8234.56,
    limit: 50000,
    accountNumber: '****9012',
    icon: CreditCardIcon,
    color: '#d32f2f',
  },
];

const recentTransactions = [
  { date: '03/20/2025', description: 'Luxury Stays - Four Seasons', amount: -2850.43, type: 'Purchase' },
  { date: '03/18/2025', description: 'Direct Deposit - Executive Comp', amount: 18750.54, type: 'Income' },
  { date: '03/15/2025', description: 'Tesla Electric Bill', amount: -142.99, type: 'Bill Payment' },
  { date: '03/12/2025', description: 'Nordstrom', amount: -3624.24, type: 'Purchase' },
  { date: '03/10/2025', description: 'Transfer to Investment Portfolio', amount: -25000.00, type: 'Transfer' },
];

const quickActions = [
  { icon: PaymentsIcon, label: 'Pay Bills', path: '/bills' },
  { icon: SendIcon, label: 'Transfer Money', path: '/transfer' },
  { icon: AccountBalanceIcon, label: 'Statements', path: '/statements' },
  { icon: CreditScoreIcon, label: 'HoliStat Credit Score', path: '/credit-score' },
  { icon: AccountBalanceWalletIcon, label: 'Financial Services', path: '/financial-services' },
  { icon: SchoolIcon, label: 'eLearning', path: '/elearning' },
];

const financialProfileData = {
  income: 385000,
  expenses: 151000,
  savings: 124000,
  debt: 1374.68,
  categories: [
    { name: 'Housing', percentage: 28 },
    { name: 'Food & Dining', percentage: 12 },
    { name: 'Transportation', percentage: 10 },
    { name: 'Travel', percentage: 15 },
    { name: 'Investments', percentage: 22 },
    { name: 'Other', percentage: 13 },
  ],
};

const behavioralProfileData = {
  spendingHabits: [
    { category: 'Luxury Shopping', frequency: 'High', amount: 'High' },
    { category: 'Fine Dining', frequency: 'High', amount: 'High' },
    { category: 'Gourmet Groceries', frequency: 'Medium', amount: 'High' },
    { category: 'Travel & Entertainment', frequency: 'High', amount: 'High' },
  ],
  savingsTrends: {
    status: 'Excellent',
    change: '+15% from previous quarter',
    projection: 'Exceeding investment portfolio goals',
  },
};

const recommendedCards = [
  {
    name: 'PNC Reserve Visa Infinite®',
    apr: '0% Intro APR for 15 months',
    rewards: '5% cash back on travel, 4% on dining, 3% on groceries',
    creditScore: '760+',
    annualFee: '$550 (Annual travel credit: $300)',
    backgroundColor: '#000000',
  },
  {
    name: 'PNC Private Select World Elite®',
    apr: '0% Intro APR for 18 months',
    rewards: 'Unlimited 2.5% cash back, Premium concierge service',
    creditScore: '780+',
    annualFee: '$495 (Waived with Private Client status)',
    backgroundColor: '#212121',
  }
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto', width: '100%', flex: 1 }}>
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Welcome, Houston Parker
            </Typography>
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
          <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            Your Accounts
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {accountsData.map((account) => (
              <Grid item xs={12} md={4} key={account.name}>
                <AnimatedCard 
                  onClick={() => navigate(`/account/${account.type.toLowerCase()}`)} 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardContent sx={{ 
                    p: 3, 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between', 
                    height: 220,
                    flex: 1
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ bgcolor: account.color, mr: 1 }}>
                        <account.icon />
                      </Avatar>
                      <Typography variant="h6">{account.name}</Typography>
                    </Box>
                    
                    <Typography variant="h4" sx={{ mb: 2 }}>
                      ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </Typography>
                    
                    <Box sx={{ mt: 'auto' }}>
                      <Typography color="textSecondary" sx={{ mb: 0.5 }}>
                        {account.type} Account
                      </Typography>
                      <Typography color="textSecondary" sx={{ mb: 0.5 }}>
                        Account Number: {account.accountNumber}
                      </Typography>
                      {account.limit && (
                        <Typography color="textSecondary" sx={{ mb: 0.5 }}>
                          Credit Limit: ${account.limit.toLocaleString()}
                        </Typography>
                      )}
                      {!account.limit && (
                        <Typography color="textSecondary" sx={{ mb: 0.5 }}>
                          &nbsp;
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                </AnimatedCard>
              </Grid>
            ))}
          </Grid>

          {/* Recent Transactions */}
          <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            Recent Transactions
          </Typography>
          <AnimatedCard sx={{ mb: 4 }}>
            <CardContent>
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
                      <TableRow key={index} hover>
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

          {/* Financial Profile */}
          <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            Financial Profile
          </Typography>
          <AnimatedCard sx={{ mb: 4 }}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" gutterBottom>
                      Annual Income: <strong>${financialProfileData.income.toLocaleString()}</strong>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Annual Expenses: <strong>${financialProfileData.expenses.toLocaleString()}</strong>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Annual Savings: <strong>${financialProfileData.savings.toLocaleString()}</strong>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Total Debt: <strong>${financialProfileData.debt.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
                    </Typography>
                  </Box>
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => navigate('/financial-profile')}
                  >
                    View Detailed Profile
                  </Button>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography variant="h6" gutterBottom>
                    Expense Breakdown
                  </Typography>
                  <Box>
                    {financialProfileData.categories.map((category, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="body2">{category.name}</Typography>
                          <Typography variant="body2">{category.percentage}%</Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={category.percentage} 
                          sx={{ 
                            height: 8, 
                            borderRadius: 4,
                            bgcolor: 'rgba(0,0,0,0.1)',
                            '& .MuiLinearProgress-bar': {
                              bgcolor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </AnimatedCard>

          {/* Behavioral Profile */}
          <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            Behavioral Profile
          </Typography>
          <AnimatedCard sx={{ mb: 4 }}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Spending Habits
                  </Typography>
                  <TableContainer sx={{ mb: 2 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Category</TableCell>
                          <TableCell>Frequency</TableCell>
                          <TableCell>Amount</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {behavioralProfileData.spendingHabits.map((habit, index) => (
                          <TableRow key={index} hover>
                            <TableCell>{habit.category}</TableCell>
                            <TableCell>
                              <Chip 
                                label={habit.frequency} 
                                size="small"
                                sx={{ 
                                  bgcolor: 
                                    habit.frequency === 'High' ? 'rgba(244, 67, 54, 0.1)' : 
                                    habit.frequency === 'Medium' ? 'rgba(255, 152, 0, 0.1)' : 
                                    'rgba(76, 175, 80, 0.1)',
                                  color: 
                                    habit.frequency === 'High' ? 'error.dark' : 
                                    habit.frequency === 'Medium' ? 'warning.dark' : 
                                    'success.dark',
                                }}
                              />
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label={habit.amount} 
                                size="small"
                                sx={{ 
                                  bgcolor: 
                                    habit.amount === 'High' ? 'rgba(244, 67, 54, 0.1)' : 
                                    habit.amount === 'Medium' ? 'rgba(255, 152, 0, 0.1)' : 
                                    'rgba(76, 175, 80, 0.1)',
                                  color: 
                                    habit.amount === 'High' ? 'error.dark' : 
                                    habit.amount === 'Medium' ? 'warning.dark' : 
                                    'success.dark',
                                }}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Savings Trends
                  </Typography>
                  <Box sx={{ mb: 3, p: 2, bgcolor: 'rgba(25, 118, 210, 0.1)', borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <TrendingUpIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {behavioralProfileData.savingsTrends.status}
                      </Typography>
                    </Box>
                    <Typography variant="body2" gutterBottom>
                      {behavioralProfileData.savingsTrends.change}
                    </Typography>
                    <Typography variant="body2">
                      {behavioralProfileData.savingsTrends.projection}
                    </Typography>
                  </Box>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    fullWidth
                    onClick={() => navigate('/behavioral-profile')}
                  >
                    View Full Profile
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </AnimatedCard>

          {/* Recommended Cards */}
          <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            Recommended for You
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {recommendedCards.map((card) => (
              <Grid item xs={12} sm={6} key={card.name}>
                <AnimatedCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: 480,
                    p: 3
                  }}>
                    <Box sx={{ 
                      width: '100%',
                      borderRadius: 2,
                      backgroundColor: card.backgroundColor,
                      color: 'white',
                      p: 3,
                      mb: 2,
                      height: 200,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {card.name}
                      </Typography>
                      <Box>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          **** **** **** 1234
                        </Typography>
                        <Typography variant="caption">
                          VALID THRU 12/28
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ mb: 2, flex: 1 }}>
                      <Typography variant="body2" color="textSecondary" gutterBottom sx={{ mb: 2 }}>
                        APR: {card.apr}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom sx={{ mb: 2 }}>
                        Rewards: {card.rewards}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom sx={{ mb: 2 }}>
                        Recommended Credit Score: {card.creditScore}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" gutterBottom sx={{ mb: 2 }}>
                        Annual Fee: {card.annualFee}
                      </Typography>
                    </Box>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                      onClick={() => navigate('/financial-services')}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </AnimatedCard>
              </Grid>
            ))}
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
          backgroundColor: '#F58025',
          color: 'white'
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
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('/financial-services'); }}>Financial Services</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('/elearning'); }}>eLearning</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate('/credit-score'); }}>Credit Score</a>
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
