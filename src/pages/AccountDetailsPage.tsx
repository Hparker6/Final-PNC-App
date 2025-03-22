import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Grid,
  Button,
} from '@mui/material';
import { useParams } from 'react-router-dom';

type Transaction = {
  date: string;
  description: string;
  amount: number;
  type: string;
  status: string;
};

type BaseAccount = {
  name: string;
  balance: string;
  accountNumber: string;
  transactions: Transaction[];
};

type CheckingAccount = BaseAccount & {
  type: 'checking';
  routingNumber: string;
};

type SavingsAccount = BaseAccount & {
  type: 'savings';
  routingNumber: string;
  apy: string;
};

type CreditAccount = BaseAccount & {
  type: 'credit';
  availableCredit: string;
  creditLimit: string;
  dueDate: string;
  minimumPayment: string;
};

type Account = CheckingAccount | SavingsAccount | CreditAccount;

export const AccountDetailsPage = () => {
  const { accountId } = useParams();

  const accountDetails: Record<string, Account> = {
    'checking-1234': {
      name: 'Performance Select Checking',
      balance: '$5,800.00',
      accountNumber: '****1234',
      type: 'checking',
      routingNumber: '043000096',
      transactions: [
        { date: '03/20/2025', description: 'Target', amount: -85.43, type: 'Purchase', status: 'Posted' },
        { date: '03/19/2025', description: 'Direct Deposit - COMPANY LLC', amount: 2750.00, type: 'Deposit', status: 'Posted' },
        { date: '03/19/2025', description: 'Starbucks', amount: -5.65, type: 'Purchase', status: 'Posted' },
        { date: '03/18/2025', description: 'ATM Withdrawal', amount: -100.00, type: 'Withdrawal', status: 'Posted' },
        { date: '03/18/2025', description: 'Amazon.com', amount: -32.99, type: 'Purchase', status: 'Posted' },
        { date: '03/17/2025', description: 'Transfer to Savings', amount: -500.00, type: 'Transfer', status: 'Posted' },
        { date: '03/17/2025', description: 'Grocery Store', amount: -156.78, type: 'Purchase', status: 'Posted' },
        { date: '03/16/2025', description: 'Gas Station', amount: -45.23, type: 'Purchase', status: 'Posted' },
        { date: '03/15/2025', description: 'Restaurant', amount: -89.99, type: 'Purchase', status: 'Posted' },
        { date: '03/15/2025', description: 'Mobile Deposit', amount: 150.00, type: 'Deposit', status: 'Posted' },
      ],
    },
    'savings-5678': {
      name: 'Standard Savings',
      balance: '$12,450.00',
      accountNumber: '****5678',
      type: 'savings',
      routingNumber: '043000096',
      apy: '0.01%',
      transactions: [
        { date: '03/17/2025', description: 'Transfer from Checking', amount: 500.00, type: 'Transfer', status: 'Posted' },
        { date: '03/15/2025', description: 'Interest Paid', amount: 0.52, type: 'Interest', status: 'Posted' },
        { date: '03/01/2025', description: 'Transfer from Checking', amount: 1000.00, type: 'Transfer', status: 'Posted' },
        { date: '02/15/2025', description: 'Interest Paid', amount: 0.48, type: 'Interest', status: 'Posted' },
      ],
    },
    'credit-9012': {
      name: 'PNC Core® Visa®',
      balance: '$750.00',
      accountNumber: '****9012',
      type: 'credit',
      availableCredit: '$4,250.00',
      creditLimit: '$5,000.00',
      dueDate: '04/15/2025',
      minimumPayment: '$25.00',
      transactions: [
        { date: '03/19/2025', description: 'Online Payment', amount: -200.00, type: 'Payment', status: 'Posted' },
        { date: '03/18/2025', description: 'Restaurant', amount: 75.50, type: 'Purchase', status: 'Posted' },
        { date: '03/17/2025', description: 'Gas Station', amount: 45.00, type: 'Purchase', status: 'Posted' },
        { date: '03/15/2025', description: 'Department Store', amount: 129.99, type: 'Purchase', status: 'Posted' },
      ],
    },
  };

  const account = accountDetails[accountId as keyof typeof accountDetails];

  if (!account) {
    return (
      <Box>
        <Typography variant="h4">Account not found</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {account.name}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Account Summary
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="textSecondary">
                  Current Balance
                </Typography>
                <Typography variant="h4" gutterBottom>
                  {account.balance}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Account Number
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {account.accountNumber}
                </Typography>
                {(account.type === 'checking' || account.type === 'savings') && (
                  <>
                    <Typography variant="body2" color="textSecondary">
                      Routing Number
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {account.routingNumber}
                    </Typography>
                  </>
                )}
                {account.type === 'savings' && (
                  <>
                    <Typography variant="body2" color="textSecondary">
                      APY
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {account.apy}
                    </Typography>
                  </>
                )}
                {account.type === 'credit' && (
                  <>
                    <Typography variant="body2" color="textSecondary">
                      Available Credit
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {account.availableCredit}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Next Payment Due
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {account.dueDate} (Minimum: {account.minimumPayment})
                    </Typography>
                  </>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">Transaction History</Typography>
                <Button variant="outlined" size="small">
                  Download Statement
                </Button>
              </Box>
              <TableContainer component={Paper} elevation={0}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {account.transactions.map((transaction, index) => (
                      <TableRow key={index}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            color:
                              transaction.type === 'Payment' || transaction.amount < 0
                                ? 'error.main'
                                : 'success.main',
                            fontWeight: 500,
                          }}
                        >
                          ${Math.abs(transaction.amount).toFixed(2)}
                        </TableCell>
                        <TableCell>{transaction.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
