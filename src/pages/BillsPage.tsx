import {
  Box,
  Typography,
  CardContent,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { HomeButton } from '../components/HomeButton';
import { AnimatedCard } from '../components/AnimatedCard';

export const BillsPage = () => {
  const upcomingBills = [
    {
      payee: 'Electric Company',
      amount: 145.32,
      dueDate: '03/25/2025',
      status: 'Scheduled',
      autopay: true,
    },
    {
      payee: 'Water Utility',
      amount: 78.50,
      dueDate: '03/28/2025',
      status: 'Due',
      autopay: false,
    },
    {
      payee: 'Internet Service',
      amount: 89.99,
      dueDate: '04/01/2025',
      status: 'Due',
      autopay: true,
    },
    {
      payee: 'Cell Phone',
      amount: 125.00,
      dueDate: '04/05/2025',
      status: 'Due',
      autopay: true,
    },
  ];

  const recentPayments = [
    {
      payee: 'Electric Company',
      amount: 138.45,
      date: '02/25/2025',
      status: 'Completed',
    },
    {
      payee: 'Water Utility',
      amount: 72.80,
      date: '02/28/2025',
      status: 'Completed',
    },
    {
      payee: 'Internet Service',
      amount: 89.99,
      date: '03/01/2025',
      status: 'Completed',
    },
  ];

  const totalUpcoming = upcomingBills.reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <Box sx={{ p: 3, maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
      <HomeButton />
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Bill Pay</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Add New Payee
        </Button>
      </Box>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <AnimatedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>Total Upcoming Bills</Typography>
              <Typography variant="h4" color="primary">
                ${totalUpcoming.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Due in next 30 days
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <AnimatedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>AutoPay Enabled</Typography>
              <Typography variant="h4" color="primary">
                {upcomingBills.filter(bill => bill.autopay).length}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Out of {upcomingBills.length} bills
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <AnimatedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>Bills Paid This Month</Typography>
              <Typography variant="h4" color="primary">
                {recentPayments.length}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Total paid: ${recentPayments.reduce((sum, payment) => sum + payment.amount, 0).toFixed(2)}
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <AnimatedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Bills
              </Typography>
              <TableContainer component={Paper} elevation={0}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Payee</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell>Due Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>AutoPay</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {upcomingBills.map((bill) => (
                      <TableRow key={bill.payee}>
                        <TableCell>{bill.payee}</TableCell>
                        <TableCell align="right">${bill.amount.toFixed(2)}</TableCell>
                        <TableCell>{bill.dueDate}</TableCell>
                        <TableCell>
                          <Chip
                            label={bill.status}
                            color={bill.status === 'Scheduled' ? 'success' : 'warning'}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={bill.autopay ? 'AutoPay On' : 'AutoPay Off'}
                            color={bill.autopay ? 'primary' : 'default'}
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="right">
                          <IconButton size="small">
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </AnimatedCard>
        </Grid>

        <Grid item xs={12} md={4}>
          <AnimatedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Payments
              </Typography>
              <TableContainer component={Paper} elevation={0}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Payee</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentPayments.map((payment) => (
                      <TableRow key={payment.payee + payment.date}>
                        <TableCell>{payment.payee}</TableCell>
                        <TableCell align="right">${payment.amount.toFixed(2)}</TableCell>
                        <TableCell>{payment.date}</TableCell>
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
