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
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SchoolIcon from '@mui/icons-material/School';

export const LoansPage = () => {
  const creditCards = [
    {
      name: 'PNC Cash Rewards® Visa®',
      benefits: [
        '4% cash back on gas station purchases',
        '3% cash back on dining including takeout',
        '2% cash back at grocery stores',
        '1% cash back on all other purchases',
      ],
      apr: '16.99% - 26.99% Variable APR',
      annualFee: '$0',
      welcomeBonus: '$200 cash back after spending $1,000 in first 3 months',
      recommended: true,
    },
    {
      name: 'PNC Core® Visa®',
      benefits: [
        'No annual fee',
        '0% Intro APR for 15 months on purchases',
        'Zero Liability Fraud Protection',
        'Mobile wallet compatibility',
      ],
      apr: '15.99% - 25.99% Variable APR',
      annualFee: '$0',
      welcomeBonus: 'None',
      recommended: false,
    },
    {
      name: 'PNC Travel Rewards® Visa®',
      benefits: [
        '2X miles on all purchases',
        'No foreign transaction fees',
        'Trip cancellation insurance',
        'Travel and emergency assistance',
      ],
      apr: '18.99% - 28.99% Variable APR',
      annualFee: '$95',
      welcomeBonus: '50,000 bonus miles after spending $3,000 in first 3 months',
      recommended: true,
    },
  ];

  const loans = [
    {
      type: 'Mortgage',
      icon: <HomeIcon />,
      products: [
        {
          name: '30-Year Fixed Rate Mortgage',
          rate: '6.875%',
          description: 'Traditional 30-year fixed-rate mortgage with stable monthly payments',
          features: ['Fixed monthly payments', 'No prepayment penalties', 'Rate lock available'],
        },
        {
          name: '15-Year Fixed Rate Mortgage',
          rate: '6.125%',
          description: 'Build equity faster with a 15-year term and lower interest rate',
          features: ['Lower interest rate', 'Build equity faster', 'Pay less total interest'],
        },
      ],
    },
    {
      type: 'Auto Loans',
      icon: <DirectionsCarIcon />,
      products: [
        {
          name: 'New Auto Loan',
          rate: '5.99%',
          description: 'Competitive rates for new vehicle purchases',
          features: ['Flexible terms up to 72 months', 'No application fee', 'Quick approval'],
        },
        {
          name: 'Used Auto Loan',
          rate: '6.49%',
          description: 'Finance your pre-owned vehicle purchase',
          features: ['Competitive rates', 'Terms up to 60 months', 'Easy application process'],
        },
      ],
    },
    {
      type: 'Student Loans',
      icon: <SchoolIcon />,
      products: [
        {
          name: 'Private Student Loan',
          rate: '4.99% - 11.99%',
          description: 'Finance your education with competitive rates',
          features: ['No origination fees', 'Flexible repayment options', 'Interest rate discounts available'],
        },
        {
          name: 'Student Loan Refinancing',
          rate: '4.49% - 8.99%',
          description: 'Consolidate and refinance your existing student loans',
          features: ['Lower your monthly payment', 'Choose your term length', 'No application fees'],
        },
      ],
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Credit Cards & Loans
      </Typography>

      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Recommended Credit Cards
      </Typography>
      <Grid container spacing={3}>
        {creditCards.map((card) => (
          <Grid item xs={12} md={4} key={card.name}>
            <Card sx={{ height: '100%', position: 'relative' }}>
              {card.recommended && (
                <Chip
                  label="Recommended"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                  }}
                />
              )}
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <CreditCardIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                  <Typography variant="h6" gutterBottom>
                    {card.name}
                  </Typography>
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
                <Divider sx={{ my: 2 }} />
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

      <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
        Available Loans
      </Typography>
      {loans.map((loanType) => (
        <Box key={loanType.type} sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            {loanType.icon}
            <Typography variant="h6" sx={{ ml: 1 }}>
              {loanType.type}
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {loanType.products.map((product) => (
              <Grid item xs={12} md={6} key={product.name}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.name}
                    </Typography>
                    <Typography variant="h5" color="primary" gutterBottom>
                      {product.rate}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {product.description}
                    </Typography>
                    <List dense>
                      {product.features.map((feature, index) => (
                        <ListItem key={index}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon color="success" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                    <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};
