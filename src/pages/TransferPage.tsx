import {
  Box,
  Typography,
  CardContent,
  Grid,
  TextField,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from '@mui/material';
import { useState } from 'react';
import { HomeButton } from '../components/HomeButton';
import { AnimatedCard } from '../components/AnimatedCard';
import SendIcon from '@mui/icons-material/Send';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const TransferPage = () => {
  const [amount, setAmount] = useState('');
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');

  const accounts = [
    {
      id: 'checking-1234',
      name: 'Performance Select Checking',
      balance: 5800.00,
      number: '****1234',
    },
    {
      id: 'savings-5678',
      name: 'Standard Savings',
      balance: 12450.00,
      number: '****5678',
    },
  ];

  const recentTransfers = [
    {
      date: '03/17/2025',
      from: 'Performance Select Checking',
      to: 'Standard Savings',
      amount: 500.00,
      status: 'Completed',
    },
    {
      date: '03/01/2025',
      from: 'Performance Select Checking',
      to: 'Standard Savings',
      amount: 1000.00,
      status: 'Completed',
    },
    {
      date: '02/15/2025',
      from: 'Standard Savings',
      to: 'Performance Select Checking',
      amount: 200.00,
      status: 'Completed',
    },
  ];

  const handleTransfer = () => {
    // In a real app, this would handle the transfer
    alert('Transfer initiated successfully!');
    setAmount('');
    setFromAccount('');
    setToAccount('');
  };

  const totalTransferred = recentTransfers.reduce((sum, transfer) => sum + transfer.amount, 0);

  return (
    <Box sx={{ p: 3, maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
      <HomeButton />
      
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Transfer Money
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SendIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Total Transfers</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                ${totalTransferred.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Last 30 days
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccountBalanceIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Available Balance</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                ${accounts[0].balance.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Performance Select Checking
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUpIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Savings Growth</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                +$1,500.00
              </Typography>
              <Typography variant="body2" color="textSecondary">
                This month from transfers
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <AnimatedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Make a Transfer
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  select
                  fullWidth
                  label="From Account"
                  value={fromAccount}
                  onChange={(e) => setFromAccount(e.target.value)}
                  margin="normal"
                >
                  {accounts.map((account) => (
                    <MenuItem key={account.id} value={account.id}>
                      {account.name} ({account.number}) - ${account.balance.toFixed(2)}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  fullWidth
                  label="To Account"
                  value={toAccount}
                  onChange={(e) => setToAccount(e.target.value)}
                  margin="normal"
                >
                  {accounts.map((account) => (
                    <MenuItem
                      key={account.id}
                      value={account.id}
                      disabled={account.id === fromAccount}
                    >
                      {account.name} ({account.number}) - ${account.balance.toFixed(2)}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  label="Amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  margin="normal"
                  InputProps={{
                    startAdornment: '$',
                  }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={handleTransfer}
                  disabled={!amount || !fromAccount || !toAccount}
                  sx={{ mt: 3 }}
                >
                  Transfer Money
                </Button>
              </Box>
            </CardContent>
          </AnimatedCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <AnimatedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Transfers
              </Typography>
              <TableContainer component={Paper} elevation={0}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>From</TableCell>
                      <TableCell>To</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentTransfers.map((transfer, index) => (
                      <TableRow key={index}>
                        <TableCell>{transfer.date}</TableCell>
                        <TableCell>{transfer.from}</TableCell>
                        <TableCell>{transfer.to}</TableCell>
                        <TableCell align="right">${transfer.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Chip
                            label={transfer.status}
                            color="success"
                            size="small"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </AnimatedCard>
        </Grid>
      </Grid>
    </Box>
  );
};
