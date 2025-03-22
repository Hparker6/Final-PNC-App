import { Box, Typography, Grid, CardContent, Chip, Button } from '@mui/material';
import { AnimatedCard } from '../components/AnimatedCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SavingsIcon from '@mui/icons-material/Savings';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';

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
  {
    name: 'PNC points® Visa®',
    image: 'https://placehold.co/400x250/003c71/ffffff?text=PNC+Points',
    apr: '0% Intro APR for 12 months',
    rewards: '4x points on everyday purchases',
    creditScore: '680+',
    annualFee: '$0',
    backgroundColor: '#003c71',
  },
  {
    name: 'PNC BusinessOptions® Visa Signature®',
    image: 'https://placehold.co/400x250/1a1a1a/ffffff?text=PNC+Business',
    apr: '13.99% - 23.99% Variable APR',
    rewards: '1.5% cash back on all purchases',
    creditScore: '720+',
    annualFee: '$0 first year, then $95',
    backgroundColor: '#1a1a1a',
  },
];

const loanTypes = [
  {
    title: 'Personal Loan',
    description: 'Flexible financing for your needs',
    apr: 'As low as 7.99% APR',
    term: '12-60 months',
    icon: AccountBalanceIcon,
  },
  {
    title: 'Auto Loan',
    description: 'Competitive rates for new and used vehicles',
    apr: 'As low as 5.99% APR',
    term: '24-72 months',
    icon: DirectionsCarIcon,
  },
  {
    title: 'Home Equity',
    description: 'Access your home\'s equity',
    apr: 'As low as 6.99% APR',
    term: 'Up to 30 years',
    icon: HomeIcon,
  },
];

const AccountsPage = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 1400, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Your Accounts
      </Typography>

      {/* Account Cards */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {accountsData.map((account) => (
          <Grid item xs={12} md={4} key={account.name}>
            <AnimatedCard>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <account.icon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                  <Typography variant="h6">{account.name}</Typography>
                </Box>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
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
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Recommended Credit Cards
      </Typography>

      {/* Recommended Credit Cards */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {recommendedCards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.name}>
            <AnimatedCard>
              <Box sx={{ 
                height: 200, 
                bgcolor: card.backgroundColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
                borderRadius: '4px 4px 0 0'
              }}>
                <Box
                  component="img"
                  src={card.image}
                  alt={card.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.2))'
                  }}
                />
              </Box>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {card.name}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={`Recommended Score: ${card.creditScore}`}
                    color="primary"
                    size="small"
                    sx={{ mb: 1 }}
                  />
                </Box>
                <Typography variant="body2" color="textSecondary" paragraph>
                  <strong>APR:</strong> {card.apr}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  <strong>Rewards:</strong> {card.rewards}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  <strong>Annual Fee:</strong> {card.annualFee}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Apply Now
                </Button>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Available Loans
      </Typography>

      {/* Loan Options */}
      <Grid container spacing={3}>
        {loanTypes.map((loan) => (
          <Grid item xs={12} md={4} key={loan.title}>
            <AnimatedCard>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <loan.icon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                  <Typography variant="h6">{loan.title}</Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  {loan.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Rate:</strong> {loan.apr}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Term:</strong> {loan.term}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Learn More
                </Button>
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AccountsPage;
