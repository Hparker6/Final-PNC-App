  import {
  Box,
  Typography,
  Grid,
  CardContent,
  Button,
  Chip,
  TextField,
  InputAdornment,
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import SavingsIcon from '@mui/icons-material/Savings';
import SecurityIcon from '@mui/icons-material/Security';
import SearchIcon from '@mui/icons-material/Search';
import { AnimatedCard } from '../components/AnimatedCard';
import { HomeButton } from '../components/HomeButton';
import { useState, useMemo } from 'react';

interface Product {
  name: string;
  type: string;
  features: string[];
  image?: string;
}

interface Service {
  title: string;
  description: string;
  icon: typeof AccountBalanceIcon;
  features: string[];
  color: string;
  products: Product[];
}

const services: Service[] = [
  {
    title: 'Credit Cards',
    description: 'Explore our range of credit cards with great rewards and benefits.',
    icon: CreditCardIcon,
    features: ['Cash Back', 'Travel Rewards', '0% APR'],
    color: '#2196f3',
    products: [
      { 
        name: 'PNC Cash Rewards® Visa®', 
        type: 'credit-card', 
        features: ['2% cash back on groceries', '3% on dining', 'No annual fee'],
        image: '/images/credit-cards/Card1'
      },
      { 
        name: 'PNC Cash Unlimited® Visa®', 
        type: 'credit-card', 
        features: ['Unlimited 1.5% cash back', 'No categories to track', 'No annual fee'],
        image: '/images/credit-cards/Card2'
      }
    ]
  },
  {
    title: 'Mortgages',
    description: 'Find the right mortgage solution for your dream home.',
    icon: HomeIcon,
    features: ['Fixed Rate', 'Adjustable Rate', 'Refinancing'],
    color: '#4caf50',
    products: [
      { name: '30-Year Fixed Mortgage', type: 'mortgage', features: ['3.75% APR', 'Fixed monthly payments', 'No PMI with 20% down'] },
      { name: '15-Year Fixed Mortgage', type: 'mortgage', features: ['2.875% APR', 'Lower total interest', 'Higher monthly payments'] },
      { name: '5/1 ARM Mortgage', type: 'mortgage', features: ['3.25% APR', 'Lower initial rate', 'Rate adjusts after 5 years'] },
    ]
  },
  {
    title: 'Auto Loans',
    description: 'Competitive rates for new and used vehicle purchases.',
    icon: DirectionsCarIcon,
    features: ['New Cars', 'Used Cars', 'Refinancing'],
    color: '#ff9800',
    products: [
      { name: 'New Car Loan', type: 'auto-loan', features: ['2.49% APR', 'Terms up to 72 months', 'No prepayment penalty'] },
      { name: 'Used Car Loan', type: 'auto-loan', features: ['3.49% APR', 'Terms up to 60 months', 'Quick approval'] },
      { name: 'Auto Refinance', type: 'auto-loan', features: ['From 2.99% APR', 'Lower your payment', 'Skip a payment option'] },
    ]
  },
  {
    title: 'Banking Services',
    description: 'Essential banking services for your financial needs.',
    icon: AccountBalanceIcon,
    features: ['Checking', 'Savings', 'CDs'],
    color: '#009688',
    products: [
      { name: 'Virtual Wallet®', type: 'banking', features: ['No monthly fee', 'Mobile deposit', 'Bill pay'] },
      { name: 'High Yield Savings', type: 'banking', features: ['2.50% APY', 'No minimum balance', 'No monthly fee'] },
      { name: 'Certificate of Deposit', type: 'banking', features: ['3.00% APY', '12-month term', 'FDIC insured'] },
    ]
  },
  {
    title: 'Business Services',
    description: 'Comprehensive solutions for your business needs.',
    icon: BusinessCenterIcon,
    features: ['Business Checking', 'Merchant Services', 'Business Loans'],
    color: '#673ab7',
    products: [
      { name: 'Business Checking', type: 'business', features: ['No monthly fee with minimum balance', 'Online banking', 'Mobile deposit'] },
      { name: 'Merchant Services', type: 'business', features: ['Payment processing', 'Point of sale solutions', 'E-commerce integration'] },
      { name: 'Business Line of Credit', type: 'business', features: ['Flexible credit line', 'Competitive rates', 'Quick access to funds'] },
    ]
  },
  {
    title: 'Education Financing',
    description: 'Smart solutions for funding education.',
    icon: SchoolIcon,
    features: ['Student Loans', 'College Savings', 'Refinancing'],
    color: '#e91e63',
    products: [
      { name: 'Student Loan', type: 'education', features: ['Competitive rates', 'Flexible repayment options', 'No origination fees'] },
      { name: '529 College Savings', type: 'education', features: ['Tax advantages', 'Multiple investment options', 'Easy to manage'] },
      { name: 'Student Loan Refinancing', type: 'education', features: ['Lower your rate', 'Consolidate loans', 'Flexible terms'] },
    ]
  },
  {
    title: 'Investment Services',
    description: 'Grow your wealth with our investment solutions.',
    icon: SavingsIcon,
    features: ['Retirement Planning', 'Investment Management', 'Wealth Advisory'],
    color: '#795548',
    products: [
      { name: 'IRA Accounts', type: 'investment', features: ['Traditional & Roth options', 'Tax advantages', 'Wide investment selection'] },
      { name: 'Managed Portfolios', type: 'investment', features: ['Professional management', 'Diversified strategies', 'Regular rebalancing'] },
      { name: 'Wealth Advisory', type: 'investment', features: ['Personalized guidance', 'Estate planning', 'Tax strategy'] },
    ]
  },
  {
    title: 'Insurance Products',
    description: 'Protect what matters most.',
    icon: SecurityIcon,
    features: ['Life Insurance', 'Home Insurance', 'Identity Protection'],
    color: '#607d8b',
    products: [
      { name: 'Term Life Insurance', type: 'insurance', features: ['Affordable coverage', 'Flexible terms', 'Quick approval'] },
      { name: 'Home Insurance', type: 'insurance', features: ['Comprehensive coverage', 'Bundling discounts', 'Claims support'] },
      { name: 'Identity Protection', type: 'insurance', features: ['24/7 monitoring', 'Fraud resolution', 'Credit monitoring'] },
    ]
  }
];

const FinancialServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return services;

    const query = searchQuery.toLowerCase();
    return services.map(service => ({
      ...service,
      products: service.products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.features.some(feature => feature.toLowerCase().includes(query)) ||
        product.type.toLowerCase().includes(query)
      )
    })).filter(service => 
      service.products.length > 0 ||
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.features.some(feature => feature.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <Box sx={{ p: 3, maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
      <HomeButton />
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">
          Financial Services
        </Typography>
        <TextField
          placeholder="Search products, cards, loans..."
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Featured Services */}
      <Grid container spacing={3}>
        {filteredServices.map((service) => {
          const IconComponent = service.icon;
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={service.title}>
              <AnimatedCard>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <IconComponent sx={{ fontSize: 32, color: service.color, mr: 1 }} />
                    <Typography variant="h6">{service.title}</Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2, height: 40 }}>
                    {service.description}
                  </Typography>
                  {service.title === 'Credit Cards' && (
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, mb: 2 }}>
                      {service.products.map((product) => (
                        product.image && (
                          <Box key={product.name} sx={{ position: 'relative', paddingBottom: '63%', height: 0 }}>
                            <Box
                              component="img"
                              src={product.image}
                              alt={product.name}
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 0,
                                borderRadius: 1,
                                objectFit: 'contain',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
                              }}
                            />
                          </Box>
                        )
                      ))}
                    </Box>
                  )}
                  <Box sx={{ mb: 2 }}>
                    {service.features.map((feature) => (
                      <Chip
                        key={feature}
                        label={feature}
                        size="small"
                        sx={{
                          mr: 0.5,
                          mb: 0.5,
                          bgcolor: `${service.color}10`,
                          color: service.color,
                          borderColor: service.color,
                        }}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  {service.products.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" color="primary" gutterBottom>
                        Available Products:
                      </Typography>
                      {service.products.map((product) => (
                        <Box key={product.name} sx={{ mb: 2, p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
                          <Typography variant="subtitle2">{product.name}</Typography>
                          <Box sx={{ mt: 1 }}>
                            {product.features.map((feature, idx) => (
                              <Typography key={idx} variant="caption" display="block" color="text.secondary">
                                • {feature}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: service.color,
                      '&:hover': {
                        bgcolor: service.color,
                        filter: 'brightness(0.9)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </AnimatedCard>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default FinancialServicesPage;
