import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from 'react-router-dom';

export const FinancialServicesPage = () => {
  const navigate = useNavigate();

  // Simulated personalized recommendations
  const creditCards = [
    {
      name: 'PNC Cash Rewards® Visa®',
      benefits: [
        '4% cash back on gas station purchases',
        '3% cash back on dining including takeout',
        '2% cash back at grocery stores',
      ],
      apr: '16.99% - 26.99% Variable APR',
      annualFee: '$0',
      welcomeBonus: '$200 cash back after spending $1,000 in first 3 months',
      matchScore: '95%',
    },
    {
      name: 'PNC Core® Visa®',
      benefits: [
        'No annual fee',
        '0% Intro APR for 15 months on purchases',
        'Zero Liability Fraud Protection',
      ],
      apr: '15.99% - 25.99% Variable APR',
      annualFee: '$0',
      welcomeBonus: 'None',
      matchScore: '88%',
    },
  ];

  const loans = [
    {
      name: 'Personal Loan',
      amount: 'Up to $35,000',
      rate: '7.99% - 15.99% APR',
      features: [
        'No collateral required',
        'Fixed monthly payments',
        'No prepayment penalties',
      ],
      matchScore: '92%',
    },
    {
      name: 'Auto Loan',
      amount: 'Up to $50,000',
      rate: '5.99% - 12.99% APR',
      features: [
        'Competitive rates',
        'Flexible terms up to 72 months',
        'Quick approval process',
      ],
      matchScore: '87%',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Button
        startIcon={<HomeIcon />}
        onClick={() => navigate('/')}
        variant="contained"
        sx={{ mb: 3 }}
      >
        Back to Home
      </Button>

      <Typography variant="h4" gutterBottom>
        Financial Services
      </Typography>

      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Credit Cards
      </Typography>
      <Grid container spacing={3}>
        {creditCards.map((card) => (
          <Grid item xs={12} md={6} key={card.name}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CreditCardIcon sx={{ fontSize: 40, color: 'primary.main', mr: 1 }} />
                    <Typography variant="h6">{card.name}</Typography>
                  </Box>
                  <Chip label={`${card.matchScore} Match`} color="success" />
                </Box>
                
                <List dense>
                  {card.benefits.map((benefit, index) => (
                    <ListItem key={index}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="body2" color="textSecondary" gutterBottom>
                  <strong>APR:</strong> {card.apr}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  <strong>Annual Fee:</strong> {card.annualFee}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  <strong>Welcome Bonus:</strong> {card.welcomeBonus}
                </Typography>

                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Loans
      </Typography>
      <Grid container spacing={3}>
        {loans.map((loan) => (
          <Grid item xs={12} md={6} key={loan.name}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccountBalanceIcon sx={{ fontSize: 40, color: 'primary.main', mr: 1 }} />
                    <Typography variant="h6">{loan.name}</Typography>
                  </Box>
                  <Chip label={`${loan.matchScore} Match`} color="success" />
                </Box>

                <Typography variant="body1" color="primary" gutterBottom>
                  Amount: {loan.amount}
                </Typography>
                <Typography variant="body1" color="primary" gutterBottom>
                  Rate: {loan.rate}
                </Typography>

                <List dense>
                  {loan.features.map((feature, index) => (
                    <ListItem key={index}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>

                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
