  import {
  Box,
  Typography,
  Grid,
  Button,
  Chip,
  TextField,
  InputAdornment,
  Container,
  Paper,
  Tabs,
  Tab,
  Divider,
  Avatar,
  Rating
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import SavingsIcon from '@mui/icons-material/Savings';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { HomeButton } from '../components/HomeButton';
import { Footer } from '../components/Footer';
import { useState, useMemo } from 'react';

interface Product {
  name: string;
  type: string;
  features: string[];
  image?: string;
  backgroundColor?: string;
  textColor?: string;
  APR?: string;
  annualFee?: string;
  rewardRate?: string;
  introOffer?: string;
  creditScoreRequired?: string;
  rating?: number;
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
        features: ['4% cash back on gas', '3% on dining', '2% on groceries', 'No annual fee'],
        image: '/images/credit-cards/GreenCard.png',
        backgroundColor: '#006940',
        textColor: 'white',
        APR: '0% Intro APR for 12 months',
        annualFee: '$0',
        rewardRate: 'Up to 4%',
        introOffer: '$200 cash back after spending $500 in first 3 months',
        creditScoreRequired: '670+',
        rating: 4.5
      },
      { 
        name: 'PNC Cash Unlimited® Visa®', 
        type: 'credit-card', 
        features: ['Unlimited 1.5% cash back', 'No categories to track', 'No annual fee'],
        image: '/images/credit-cards/BlackCard.png',
        backgroundColor: '#212121',
        textColor: 'white',
        APR: '0% Intro APR for 15 months',
        annualFee: '$0',
        rewardRate: '1.5% on everything',
        introOffer: '$150 cash back after spending $500 in first 3 months',
        creditScoreRequired: '700+',
        rating: 4.2
      },
      { 
        name: 'PNC Premier Traveler® Visa®', 
        type: 'credit-card', 
        features: ['2X miles on all purchases', 'No foreign transaction fees', 'TSA PreCheck credit'],
        backgroundColor: '#1a237e',
        textColor: 'white',
        APR: '16.99%-24.99% Variable',
        annualFee: '$95 (waived first year)',
        rewardRate: '2X miles',
        introOffer: '60,000 bonus miles after spending $3,000 in first 3 months',
        creditScoreRequired: '720+',
        rating: 4.7
      },
      { 
        name: 'PNC Secured Visa®', 
        type: 'credit-card', 
        features: ['Build or rebuild credit', 'Reports to all 3 credit bureaus', 'Convert to unsecured card option'],
        backgroundColor: '#607d8b',
        textColor: 'white',
        APR: '22.99% Variable',
        annualFee: '$39',
        rewardRate: 'None',
        introOffer: 'None',
        creditScoreRequired: '350+',
        rating: 3.8
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

const CreditCardImage = ({ color, name, textColor = 'white' }: { color: string, name: string, textColor?: string }) => {
  return (
    <Box 
      sx={{
        width: '100%',
        maxWidth: 320,
        height: 180,
        borderRadius: 2,
        bgcolor: color,
        color: textColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        border: '1px solid rgba(0,0,0,0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '0.9rem', maxWidth: '70%' }}>
          {name}
        </Typography>
        <Box
          component="img"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIwIDRIMTZWMkgxNHYySDEwVjJIOHYySDE0djJINlY0SDRWNTE4YzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWNGgtMnptMCAxNEg0VjhoMTZ2MTB6Ii8+PHBhdGggZD0iTTYuMDEgMTBoMS45OGMyLjA5IDAgMy43OSAxLjcgMy43OSAzLjc5szEuNyAxLjk5LTEuNyAxLjk5SDYuMDF2LTUuNzh6Ii8+PC9zdmc+"
          alt="Card chip"
          sx={{ width: 36, height: 36, filter: 'opacity(0.7)' }}
        />
      </Box>
      
      <Box>
        <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
          **** **** **** 1234
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
            VALID THRU 12/28
          </Typography>
          <Box
            component="img"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTYgMTlhMiAyIDAgMCAwIDIgMmgxMWEyIDIgMCAwIDAgMi0yVjdjMC0xLjEtLjktMi0yLTJIOGMtMS4xIDAtMiAuOS0yIDJ2MTJ6TTEyIDkuNWwzIDMtMyAzLTMtM3oiLz48L3N2Zz4="
            alt="Card logo"
            sx={{ width: 36, height: 36, filter: 'opacity(0.7)' }}
          />
        </Box>
      </Box>
      
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '150%', 
          height: '100%', 
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          top: 0,
          left: 0,
          transform: 'translateX(-30%) translateY(-50%) rotate(25deg)'
        }} 
      />
    </Box>
  );
};

const EnhancedCreditCard = ({product}: {product: Product}) => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        borderRadius: 4, 
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        height: '100%',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 16px 30px rgba(0,0,0,0.12)'
        }
      }}
    >
      <Box sx={{ 
        bgcolor: product.backgroundColor || '#1976d2',
        color: product.textColor || 'white',
        p: 3,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 150,
          height: 150,
          borderRadius: '0 0 0 150px',
          bgcolor: 'rgba(255,255,255,0.1)',
          zIndex: 0
        }} />
        
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {product.name}
          </Typography>
          
          {product.rating && (
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Rating 
                value={product.rating} 
                precision={0.5} 
                readOnly 
                size="small" 
                sx={{ color: 'white' }}
              />
              <Typography variant="body2" sx={{ ml: 1 }}>
                ({product.rating}/5)
              </Typography>
            </Box>
          )}
          
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <CreditCardImage 
              color={product.backgroundColor || '#1976d2'} 
              name={product.name} 
              textColor={product.textColor || 'white'} 
            />
          </Box>
        </Box>
      </Box>
      
      <Box sx={{ p: 3 }}>
        {product.introOffer && (
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            mb: 2, 
            p: 1.5, 
            bgcolor: 'rgba(76,175,80,0.1)', 
            borderRadius: 1 
          }}>
            <LocalOfferIcon sx={{ color: '#4caf50', mr: 1, fontSize: 20, mt: 0.5 }} />
            <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
              <strong>Intro Offer:</strong> {product.introOffer}
            </Typography>
          </Box>
        )}
        
        <Grid container spacing={2}>
          {product.rewardRate && (
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Rewards Rate
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {product.rewardRate}
              </Typography>
            </Grid>
          )}
          
          {product.APR && (
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                APR
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {product.APR}
              </Typography>
            </Grid>
          )}
          
          {product.annualFee && (
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Annual Fee
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {product.annualFee}
              </Typography>
            </Grid>
          )}
          
          {product.creditScoreRequired && (
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Credit Score
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                {product.creditScoreRequired}
              </Typography>
            </Grid>
          )}
        </Grid>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            Key Benefits
          </Typography>
          {product.features.map((feature, idx) => (
            <Box 
              key={idx} 
              sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                mb: 1 
              }}
            >
              <CheckCircleIcon sx={{ color: product.backgroundColor || '#1976d2', mr: 1, fontSize: 20, mt: 0.2 }} />
              <Typography variant="body2">
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
        
        <Button 
          variant="contained" 
          fullWidth 
          endIcon={<ArrowForwardIcon />}
          sx={{ 
            mt: 3, 
            bgcolor: product.backgroundColor || '#1976d2', 
            color: product.textColor || 'white',
            '&:hover': {
              bgcolor: product.backgroundColor || '#1976d2',
              filter: 'brightness(0.9)'
            }
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Paper>
  );
};

const FinancialServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

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
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#f9fafc',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <HomeButton />
      
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#051937',
        background: 'linear-gradient(135deg, #051937 0%, #004d7a 50%, #008793 100%)',
        color: 'white',
        pt: { xs: 10, md: 16 },
        pb: { xs: 10, md: 12 },
      }}>
        {/* Decorative Elements */}
        <Box sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
        }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography 
                variant="h2" 
                fontWeight="bold"
                sx={{ 
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: 'linear-gradient(90deg, #ffffff 0%, #e0f7fa 100%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Financial Solutions Designed for You
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  maxWidth: 550,
                  fontWeight: 'normal',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6
                }}
              >
                Discover our comprehensive suite of financial products and services tailored to help you achieve your financial goals.
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    bgcolor: '#00bcd4',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    '&:hover': {
                      bgcolor: '#00acc1'
                    }
                  }}
                >
                  Explore Products
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    borderColor: 'rgba(255,255,255,0.5)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 'bold',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Financial Advice
                </Button>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                mt: 5,
                gap: 3,
                flexWrap: 'wrap'
              }}>
                {['24/7 Support', 'Secure Banking', 'Mobile Access'].map((item, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center'
                    }}
                  >
                    <CheckCircleIcon sx={{ mr: 1, color: '#4caf50' }} />
                    <Typography variant="body1" fontWeight="medium">
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box 
                sx={{ 
                  position: 'relative',
                  height: 400,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: '5%',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(-15deg)',
                    zIndex: 3,
                    width: '80%',
                    maxWidth: 300,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(-50%) rotate(-10deg) translateY(-10px)',
                    }
                  }}
                >
                  <CreditCardImage color="#006940" name="PNC Cash Rewards® Visa®" textColor="white" />
                </Box>
                
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: '25%',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(5deg)',
                    zIndex: 2,
                    width: '80%',
                    maxWidth: 300,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(-50%) rotate(10deg) translateY(-10px)',
                    }
                  }}
                >
                  <CreditCardImage color="#212121" name="PNC Cash Unlimited® Visa®" textColor="white" />
                </Box>
                
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translateX(-50%) rotate(-5deg)',
                    zIndex: 1,
                    width: '80%',
                    maxWidth: 300,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(-50%) rotate(-10deg) translateY(-10px)',
                    }
                  }}
                >
                  <CreditCardImage color="#1a237e" name="PNC Premier Traveler® Visa®" textColor="white" />
                </Box>
              </Box>
            </Grid>
          </Grid>
          
          {/* Search Bar */}
          <Box 
            sx={{ 
              mt: 8,
              p: 2, 
              bgcolor: 'white', 
              borderRadius: 3,
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            <TextField
              fullWidth
              placeholder="Search for credit cards, loans, and more..."
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                sx: { 
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0,0,0,0.1)'
                  }
                }
              }}
            />
          </Box>
        </Container>
      </Box>
      
      {/* Main Content Container */}
      <Box sx={{ p: 3, maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
        {/* Notification Banner */}
        <Box sx={{ 
          width: '100%',
          p: 3,
          mb: 4,
          borderRadius: 2,
          bgcolor: '#ffe0b2',
          border: '1px solid #ffb74d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center'
        }}>
          <Typography variant="h6" sx={{ color: '#e65100', fontWeight: 'bold', mb: 1 }}>
            Special Limited Time Offer!
          </Typography>
          <Typography>
            Get 0% APR for 18 months on balance transfers when you apply for any PNC credit card
          </Typography>
        </Box>
        
        <Box sx={{ pt: 12 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Financial Services & Products
            </Typography>
          </Box>

          {/* All Financial Services */}
          <Box sx={{ mt: 8, mb: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ 
              mb: 3, 
              fontWeight: 700,
              color: '#1976d2',
              display: 'flex',
              alignItems: 'center',
              '&:after': {
                content: '""',
                display: 'block',
                height: 3,
                width: 60,
                backgroundColor: '#00bcd4',
                ml: 2,
                borderRadius: 1.5
              }
            }}>
              Featured Credit Cards
            </Typography>
            
            <Grid container spacing={3}>
              {services[0].products.slice(0, 4).map((product, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <EnhancedCreditCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* Service Categories */}
          <Box sx={{ mb: 8, mt: 10 }}>
            <Typography variant="h5" gutterBottom sx={{ 
              mb: 4, 
              fontWeight: 700,
              color: '#004d7a',
              display: 'flex',
              alignItems: 'center',
              '&:after': {
                content: '""',
                display: 'block',
                height: 3,
                width: 60,
                backgroundColor: '#00bcd4',
                ml: 2,
                borderRadius: 1.5
              }
            }}>
              Financial Services
            </Typography>
            
            <Paper sx={{ 
              borderRadius: 3, 
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <Tabs 
                value={activeTab} 
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                textColor="primary"
                indicatorColor="primary"
                sx={{ 
                  borderBottom: 1, 
                  borderColor: 'divider',
                  '.MuiTabs-indicator': {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3
                  },
                  '.MuiTab-root': {
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    px: 3,
                    py: 2
                  }
                }}
              >
                {filteredServices.map((service, index) => (
                  <Tab 
                    key={index} 
                    label={service.title} 
                    icon={<service.icon />} 
                    iconPosition="start" 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: 1
                    }}
                  />
                ))}
              </Tabs>
              
              <Box sx={{ p: 4 }}>
                {filteredServices.map((service, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      display: activeTab === index ? 'block' : 'none'
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      mb: 4
                    }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: service.color || '#1976d2',
                          width: 56,
                          height: 56,
                          mr: 2
                        }}
                      >
                        <service.icon sx={{ fontSize: 32 }} />
                      </Avatar>
                      <Box>
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                          {service.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700 }}>
                          {service.description}
                        </Typography>
                        
                        <Box sx={{ 
                          display: 'flex', 
                          mt: 2,
                          gap: 1,
                          flexWrap: 'wrap'
                        }}>
                          {service.features && service.features.map((feature, idx) => (
                            <Chip 
                              key={idx} 
                              label={feature}
                              variant="outlined"
                              size="medium"
                              sx={{ 
                                borderColor: service.color || '#1976d2',
                                color: service.color || '#1976d2',
                                fontWeight: 500
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                    
                    <Divider sx={{ mb: 4 }} />
                    
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Available Products
                    </Typography>
                    
                    <Grid container spacing={3} sx={{ mt: 1 }}>
                      {service.products.map((product, pIndex) => (
                        <Grid item xs={12} sm={6} md={4} key={pIndex}>
                          <Paper
                            elevation={2}
                            sx={{
                              p: 3,
                              borderRadius: 2,
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                              }
                            }}
                          >
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                              {product.name}
                            </Typography>
                            
                            <Box sx={{ my: 2, flexGrow: 1 }}>
                              {product.features.map((feature, fIndex) => (
                                <Box 
                                  key={fIndex} 
                                  sx={{ 
                                    display: 'flex', 
                                    alignItems: 'flex-start', 
                                    mb: 1 
                                  }}
                                >
                                  <CheckCircleIcon sx={{ color: service.color || '#1976d2', mr: 1, fontSize: 20, mt: 0.2 }} />
                                  <Typography variant="body2">
                                    {feature}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                            
                            <Button
                              variant="text"
                              endIcon={<ChevronRightIcon />}
                              sx={{
                                mt: 1,
                                color: service.color || '#1976d2',
                                fontWeight: 'bold',
                                justifyContent: 'flex-start',
                                pl: 0,
                                '&:hover': {
                                  bgcolor: 'transparent',
                                  textDecoration: 'underline'
                                }
                              }}
                            >
                              Learn More
                            </Button>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
          
          {/* Financial Tools Section */}
          <Box sx={{ mb: 8, mt: 10 }}>
            <Typography variant="h5" gutterBottom sx={{ 
              mb: 4, 
              fontWeight: 700,
              color: '#004d7a',
              display: 'flex',
              alignItems: 'center',
              '&:after': {
                content: '""',
                display: 'block',
                height: 3,
                width: 60,
                backgroundColor: '#00bcd4',
                ml: 2,
                borderRadius: 1.5
              }
            }}>
              Financial Tools & Calculators
            </Typography>
            
            <Grid container spacing={3}>
              {[
                {
                  title: 'Loan Calculator',
                  description: 'Calculate your monthly payments and total interest based on loan amount, term, and interest rate.',
                  icon: <AccountBalanceIcon sx={{ fontSize: 40, color: '#2196f3' }} />,
                  color: '#2196f3'
                },
                {
                  title: 'Mortgage Calculator',
                  description: 'Estimate your monthly mortgage payments including principal, interest, taxes, and insurance.',
                  icon: <HomeIcon sx={{ fontSize: 40, color: '#ff5722' }} />,
                  color: '#ff5722'
                },
                {
                  title: 'Savings Goal Calculator',
                  description: 'Determine how much you need to save monthly to reach your financial goals.',
                  icon: <SavingsIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
                  color: '#4caf50'
                },
                {
                  title: 'Retirement Planner',
                  description: 'Project your retirement savings and income needs based on your current situation.',
                  icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
                  color: '#9c27b0'
                }
              ].map((tool, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 32px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: 100,
                      height: 100,
                      borderRadius: '0 0 0 100px',
                      bgcolor: `${tool.color}10`,
                      zIndex: 0
                    }} />
                    
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Avatar
                          sx={{
                            bgcolor: `${tool.color}20`,
                            width: 80,
                            height: 80,
                            color: tool.color
                          }}
                        >
                          {tool.icon}
                        </Avatar>
                      </Box>
                      
                      <Typography variant="h6" fontWeight="bold" gutterBottom align="center">
                        {tool.title}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
                        {tool.description}
                      </Typography>
                      
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          bgcolor: tool.color,
                          '&:hover': {
                            bgcolor: tool.color,
                            filter: 'brightness(0.9)'
                          }
                        }}
                      >
                        Use Calculator
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* Contact Section */}
          <Box sx={{ mb: 8, mt: 12 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 4,
                background: 'linear-gradient(135deg, #051937 0%, #004d7a 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
              }} />
              
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={7}>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Need Help With Your Financial Journey?
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                    Our financial advisors are ready to help you navigate your options and find the perfect solutions for your needs.
                  </Typography>
                  
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: '#00bcd4',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 'bold',
                      '&:hover': {
                        bgcolor: '#00acc1'
                      }
                    }}
                  >
                    Schedule a Consultation
                  </Button>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box sx={{ 
                    textAlign: 'center',
                    p: 3,
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderRadius: 3
                  }}>
                    <Typography variant="h6" gutterBottom>
                      Contact Us
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Phone: (800) 762-2265
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Email: support@pncbank.com
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      Mon-Fri: 7am-10pm ET<br />
                      Sat-Sun: 8am-5pm ET
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default FinancialServicesPage;
