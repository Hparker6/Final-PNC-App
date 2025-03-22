import {
  Box,
  Typography,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FolderIcon from '@mui/icons-material/Folder';
import { useState } from 'react';
import { HomeButton } from '../components/HomeButton';
import { AnimatedCard } from '../components/AnimatedCard';

export const StatementsPage = () => {
  const [selectedAccount, setSelectedAccount] = useState('all');

  const accounts = [
    {
      id: 'checking-1234',
      name: 'Performance Select Checking',
      number: '****1234',
    },
    {
      id: 'savings-5678',
      name: 'Standard Savings',
      number: '****5678',
    },
    {
      id: 'credit-9012',
      name: 'PNC Core® Visa®',
      number: '****9012',
    },
  ];

  const statements = [
    {
      account: 'Performance Select Checking',
      period: 'March 2025',
      startDate: '03/01/2025',
      endDate: '03/31/2025',
      size: '245 KB',
    },
    {
      account: 'Performance Select Checking',
      period: 'February 2025',
      startDate: '02/01/2025',
      endDate: '02/29/2025',
      size: '238 KB',
    },
    {
      account: 'Standard Savings',
      period: 'March 2025',
      startDate: '03/01/2025',
      endDate: '03/31/2025',
      size: '156 KB',
    },
    {
      account: 'Standard Savings',
      period: 'February 2025',
      startDate: '02/01/2025',
      endDate: '02/29/2025',
      size: '142 KB',
    },
    {
      account: 'PNC Core® Visa®',
      period: 'March 2025',
      startDate: '03/01/2025',
      endDate: '03/31/2025',
      size: '189 KB',
    },
    {
      account: 'PNC Core® Visa®',
      period: 'February 2025',
      startDate: '02/01/2025',
      endDate: '02/29/2025',
      size: '176 KB',
    },
  ];

  const filteredStatements = selectedAccount === 'all'
    ? statements
    : statements.filter(s => s.account === accounts.find(a => a.id === selectedAccount)?.name);

  const statementStats = {
    totalStatements: statements.length,
    totalAccounts: accounts.length,
    latestStatement: statements[0].period,
    totalSize: statements.reduce((sum, s) => sum + parseInt(s.size), 0),
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
      <HomeButton />
      
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Account Statements
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <DescriptionIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Total Statements</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                {statementStats.totalStatements}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Available for download
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FolderIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Total Size</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                {Math.round(statementStats.totalSize / 1024)} MB
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Combined statement size
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AssessmentIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Latest Period</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                {statementStats.latestStatement}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Most recent statement
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FolderIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Accounts</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                {statementStats.totalAccounts}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                With statements
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6">Statement History</Typography>
                <FormControl sx={{ minWidth: 200 }}>
                  <InputLabel>Filter by Account</InputLabel>
                  <Select
                    value={selectedAccount}
                    onChange={(e) => setSelectedAccount(e.target.value)}
                    label="Filter by Account"
                  >
                    <MenuItem value="all">All Accounts</MenuItem>
                    {accounts.map((account) => (
                      <MenuItem key={account.id} value={account.id}>
                        {account.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <TableContainer component={Paper} elevation={0}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Account</TableCell>
                      <TableCell>Period</TableCell>
                      <TableCell>Date Range</TableCell>
                      <TableCell>Size</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredStatements.map((statement, index) => (
                      <TableRow key={index}>
                        <TableCell>{statement.account}</TableCell>
                        <TableCell>
                          <Chip
                            label={statement.period}
                            color="primary"
                            size="small"
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell>
                          {statement.startDate} - {statement.endDate}
                        </TableCell>
                        <TableCell>{statement.size}</TableCell>
                        <TableCell align="right">
                          <Button
                            startIcon={<DownloadIcon />}
                            variant="contained"
                            size="small"
                          >
                            Download
                          </Button>
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
