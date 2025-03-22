import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { AccountDetailsPage } from './pages/AccountDetailsPage';
import { BillsPage } from './pages/BillsPage';
import { TransferPage } from './pages/TransferPage';
import { StatementsPage } from './pages/StatementsPage';
import { LoansPage } from './pages/LoansPage';
import CreditScorePage from './pages/CreditScorePage';
import HolistatExplainerPage from './pages/HolistatExplainerPage';
import { FinancialServicesPage } from './pages/RecommendedProductsPage';
import ELearningPage from './pages/ELearningPage';
import AccountsPage from './pages/AccountsPage';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f58220',
    },
    secondary: {
      main: '#005587',
    },
  },
});

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="accounts" element={<AccountsPage />} />
            <Route path="account/:id" element={<AccountDetailsPage />} />
            <Route path="bills" element={<BillsPage />} />
            <Route path="transfer" element={<TransferPage />} />
            <Route path="statements" element={<StatementsPage />} />
            <Route path="loans" element={<LoansPage />} />
            <Route path="credit-score" element={<CreditScorePage />} />
            <Route path="holistat-explainer" element={<HolistatExplainerPage />} />
            <Route path="financial-services" element={<FinancialServicesPage />} />
            <Route path="elearning" element={<ELearningPage />} />
            <Route path="transactions" element={<AccountDetailsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
