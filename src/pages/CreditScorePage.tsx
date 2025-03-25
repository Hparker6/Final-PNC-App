import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  CardContent,
  LinearProgress,
  TextField,
  IconButton,
  Button,
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SendIcon from '@mui/icons-material/Send';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import RecommendIcon from '@mui/icons-material/Recommend';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AnimatedCard } from '../components/AnimatedCard';
import { HomeButton } from '../components/HomeButton';
import { Footer } from '../components/Footer';

// Mock data for the chart
const creditHistory = [
  { month: 'Jan', score: 680 },
  { month: 'Feb', score: 695 },
  { month: 'Mar', score: 705 },
  { month: 'Apr', score: 715 },
  { month: 'May', score: 725 },
  { month: 'Jun', score: 745 },
];

const CreditScorePage = () => {
  const navigate = useNavigate();
  const [creditScore] = useState(745);
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [chatHistory, setChatHistory] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = { text: message, isUser: true };
    setChatHistory(prev => [...prev, userMessage]);
    
    // Create a small delay to simulate processing
    setTimeout(() => {
      // Use fixed response for any user message
      const botResponse = "Your HoliStat Credit Score of 745 is considered 'Very Good'. This places you in the top 30% of customers. Your score is primarily influenced by your consistent payment history and low credit utilization (only using 18% of available credit). Your length of credit history (7+ years) and diverse credit mix also contribute positively. To improve further, consider reducing the number of recent credit inquiries and continue making on-time payments.";
      
      setChatHistory(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 1000);
    
    setMessage('');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      // Here you would typically upload the file to your server
      // For now, we'll just show a success message
      setChatHistory(prev => [...prev, { 
        text: `Successfully uploaded: ${file.name}. Our team will review your document and update your HoliStat Credit Score accordingly.`, 
        isUser: false 
      }]);
    }
  };

  // Scroll to bottom of chat when component mounts or chat history changes
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const getScoreColor = (score: number) => {
    if (score >= 740) return '#2e7d32';
    if (score >= 670) return '#ed6c02';
    return '#d32f2f';
  };

  const creditScoreData = [
    { title: 'Payment History', value: 98, color: '#2196f3' },
    { title: 'Credit Utilization', value: 23, color: '#4caf50' },
    { title: 'Credit Age', value: 75, color: '#ff9800' },
    { title: 'Credit Mix', value: 90, color: '#9c27b0' },
  ];

  // Example uploaded documents
  const uploadedDocuments = [
    { 
      name: 'February 2025 Pay Stub.pdf', 
      type: 'Pay Stub', 
      date: 'Mar 15, 2025', 
      status: 'Verified', 
      icon: WorkIcon
    },
    { 
      name: 'Recommendation Letter - Sarah Johnson.pdf', 
      type: 'Recommendation', 
      date: 'Feb 28, 2025', 
      status: 'Verified', 
      icon: RecommendIcon
    },
    { 
      name: 'Professional Resume - 2025.pdf', 
      type: 'Resume', 
      date: 'Jan 10, 2025', 
      status: 'Verified', 
      icon: DescriptionIcon
    }
  ];

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh'
    }}>
      <Box sx={{ 
        p: 3, 
        maxWidth: 1400, 
        margin: '0 auto', 
        width: '100%',
        flex: 1 
      }}>
        <HomeButton />

        {/* Main content wrapper */}
        <Box sx={{ flex: 1 }}>
          {/* Hero Section with Score */}
          <Box 
            sx={{ 
              background: 'linear-gradient(120deg, #e0f7fa 0%, #bbdefb 100%)',
              borderRadius: 3,
              p: 4,
              mt: 12, /* Increased top margin from 8 to 12 */
              mb: 4,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              boxShadow: '0 10px 20px rgba(0,0,0,0.08)'
            }}
          >
            <Box sx={{ position: 'relative', mr: { xs: 0, md: 6 }, mb: { xs: 4, md: 0 }, display: 'flex', justifyContent: 'center', width: { xs: '100%', md: 'auto' } }}>
              <Box
                sx={{
                  position: 'relative',
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  bgcolor: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 0 20px rgba(0,0,0,0.1)'
                }}
              >
                <Typography variant="h1" sx={{ color: getScoreColor(creditScore), fontWeight: 'bold', fontSize: '4rem' }}>
                  {creditScore}
                </Typography>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '12px solid',
                    borderColor: getScoreColor(creditScore),
                    opacity: 0.8,
                    boxSizing: 'border-box'
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                Your HoliStat Credit Score
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1, maxWidth: 600 }}>
                The HoliStat Credit Score is a holistic credit scoring system that considers both traditional financial metrics and behavioral factors.
              </Typography>
              <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.7)', p: 2, borderRadius: 2, minWidth: 150 }}>
                  <Typography variant="body2" color="textSecondary">Score Range</Typography>
                  <Typography variant="body1" fontWeight="medium">740-799</Typography>
                  <Typography variant="caption" color="success.main">Very Good</Typography>
                </Box>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.7)', p: 2, borderRadius: 2, minWidth: 150 }}>
                  <Typography variant="body2" color="textSecondary">Payment History</Typography>
                  <Typography variant="body1" fontWeight="medium">99%</Typography>
                  <Typography variant="caption" color="success.main">On-time</Typography>
                </Box>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.7)', p: 2, borderRadius: 2, minWidth: 150 }}>
                  <Typography variant="body2" color="textSecondary">Credit Mix</Typography>
                  <Typography variant="body1" fontWeight="medium">Excellent</Typography>
                  <Typography variant="caption" color="success.main">Diverse</Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 3 }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ 
                    px: 3,
                    py: 1,
                    fontSize: '1rem',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    '&:hover': { boxShadow: '0 6px 12px rgba(0,0,0,0.15)' },
                  }}
                  onClick={() => navigate('/holistat-explainer')}
                >
                  Learn about my score
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Summary Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <AnimatedCard sx={{ 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': { transform: 'translateY(-5px)', boxShadow: '0 12px 20px rgba(0,0,0,0.1)' },
                height: '100%'
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CreditScoreIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                    <Typography variant="h6">Current Score</Typography>
                  </Box>
                  <Typography variant="h4" sx={{ color: getScoreColor(creditScore) }}>
                    {creditScore}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Excellent
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AnimatedCard sx={{ 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': { transform: 'translateY(-5px)', boxShadow: '0 12px 20px rgba(0,0,0,0.1)' },
                height: '100%'
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TrendingUpIcon sx={{ fontSize: 32, color: getScoreColor(creditScore), mr: 1 }} />
                    <Typography variant="h6">Score Change</Typography>
                  </Box>
                  <Typography variant="h4" color="success.main">
                    +65
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Last 6 months
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AnimatedCard sx={{ 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': { transform: 'translateY(-5px)', boxShadow: '0 12px 20px rgba(0,0,0,0.1)' },
                height: '100%'
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccountBalanceIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                    <Typography variant="h6">Credit Usage</Typography>
                  </Box>
                  <Typography variant="h4" color="primary">
                    23%
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Of total available
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AnimatedCard sx={{ 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': { transform: 'translateY(-5px)', boxShadow: '0 12px 20px rgba(0,0,0,0.1)' },
                height: '100%'
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CreditScoreIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                    <Typography variant="h6">Next Update</Typography>
                  </Box>
                  <Typography variant="h4" color="primary">
                    7 Days
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Until refresh
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            {/* Credit Score Chart */}
            <Grid item xs={12} md={6}>
              <AnimatedCard sx={{ height: '100%' }}>
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" gutterBottom>
                    Score History
                  </Typography>
                  <Box sx={{ flex: 1, minHeight: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={creditHistory}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[600, 850]} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="score"
                          stroke="#1976d2"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </AnimatedCard>
            </Grid>

            {/* Credit Score Factors */}
            <Grid item xs={12} md={6}>
              <AnimatedCard sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Score Factors
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {creditScoreData.map((factor) => (
                      <Box key={factor.title} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body1">{factor.title}</Typography>
                          <Typography variant="body1" color="primary">
                            {factor.value}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={factor.value}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: factor.color,
                              borderRadius: 4,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </AnimatedCard>
            </Grid>

            {/* HoliStat Profiles Section - Two Towers */}
            <Grid item xs={12}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                  Two-Tower Profile Analysis
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ mb: 2, maxWidth: 800 }}>
                  HoliStat's proprietary Two-Tower model analyzes both financial metrics and behavioral patterns to provide a comprehensive creditworthiness assessment.
                </Typography>
              </Box>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {/* Tower 1 Section - Financial Profile */}
                <Grid item xs={12} md={6}>
                  <AnimatedCard sx={{ 
                    height: '100%', 
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    ':hover': { transform: 'translateY(-5px)', boxShadow: '0 12px 20px rgba(0,0,0,0.1)' },
                    borderTop: '5px solid #2196f3'
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box sx={{ bgcolor: '#e3f2fd', p: 1, borderRadius: '50%', mr: 2 }}>
                          <AccountBalanceIcon sx={{ fontSize: 36, color: '#2196f3' }} />
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Financial Profile</Typography>
                          <Typography variant="body2" color="textSecondary">Traditional creditworthiness metrics</Typography>
                        </Box>
                      </Box>
                      <Grid container spacing={3}>
                        {[
                          { name: 'Asset-to-Debt Ratio', value: 85 },
                          { name: 'Income Stability', value: 92 },
                          { name: 'Payment History', value: 88 },
                          { name: 'Investment Profile', value: 78 },
                        ].map((metric) => (
                          <Grid item xs={12} key={metric.name}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="body2" fontWeight="medium">
                                {metric.name}
                              </Typography>
                              <Typography variant="body2" fontWeight="bold" color={metric.value > 80 ? 'success.main' : 'primary.main'}>
                                {metric.value}%
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={metric.value}
                              sx={{
                                height: 10,
                                borderRadius: 5,
                                bgcolor: 'rgba(33,150,243,0.1)',
                                '& .MuiLinearProgress-bar': {
                                  bgcolor: '#2196f3',
                                  borderRadius: 5,
                                  backgroundImage: 'linear-gradient(90deg, #2196f3 0%, #64b5f6 100%)',
                                },
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </AnimatedCard>
                </Grid>

                {/* Tower 2 Section - Behavioral Profile */}
                <Grid item xs={12} md={6}>
                  <AnimatedCard sx={{ 
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    ':hover': { transform: 'translateY(-5px)', boxShadow: '0 12px 20px rgba(0,0,0,0.1)' },
                    borderTop: '5px solid #4caf50'
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box sx={{ bgcolor: '#e8f5e9', p: 1, borderRadius: '50%', mr: 2 }}>
                          <PsychologyIcon sx={{ fontSize: 36, color: '#4caf50' }} />
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Behavioral Profile</Typography>
                          <Typography variant="body2" color="textSecondary">Unique behavioral insights</Typography>
                        </Box>
                      </Box>
                      <Grid container spacing={3}>
                        {[
                          { name: 'Financial Responsibility', value: 90 },
                          { name: 'Lifestyle Stability', value: 85 },
                          { name: 'Employment History', value: 95 },
                          { name: 'Behavioral Consistency', value: 88 },
                        ].map((metric) => (
                          <Grid item xs={12} key={metric.name}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="body2" fontWeight="medium">
                                {metric.name}
                              </Typography>
                              <Typography variant="body2" fontWeight="bold" color={metric.value > 80 ? 'success.main' : 'primary.main'}>
                                {metric.value}%
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={metric.value}
                              sx={{
                                height: 10,
                                borderRadius: 5,
                                bgcolor: 'rgba(76,175,80,0.1)',
                                '& .MuiLinearProgress-bar': {
                                  bgcolor: '#4caf50',
                                  borderRadius: 5,
                                  backgroundImage: 'linear-gradient(90deg, #4caf50 0%, #81c784 100%)',
                                },
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </AnimatedCard>
                </Grid>
              </Grid>
            </Grid>

            {/* Document Upload Section */}
            <Grid item xs={12}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                  Upload Supporting Documents
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ mb: 2, maxWidth: 800 }}>
                  Upload letters of recommendation or other supporting documents to potentially improve your HoliStat Credit Score.
                  Our team will review your documents within 2-3 business days.
                </Typography>
              </Box>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={5}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ 
                      border: '2px dashed #ccc', 
                      p: 3, 
                      borderRadius: 2, 
                      width: '100%', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <UploadFileIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                      <Typography variant="body1" sx={{ mt: 1, color: 'textSecondary' }}>
                        Click to upload document
                      </Typography>
                      <Typography variant="caption" color="textSecondary" sx={{ mt: 1, textAlign: 'center' }}>
                        Accepted formats: .pdf, .doc, .docx, .txt
                      </Typography>
                    </Box>
                  </Box>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  {selectedFile && (
                    <Typography variant="body2" color="success.main" sx={{ mt: 2, textAlign: 'center' }}>
                      {selectedFile.name} uploaded successfully
                    </Typography>
                  )}
                </Grid>
                
                <Grid item xs={12} md={7}>
                  <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                    Previously Uploaded Documents
                  </Typography>
                  <AnimatedCard>
                    <CardContent sx={{ p: 0 }}>
                      {uploadedDocuments.map((doc, index) => (
                        <Box 
                          key={index}
                          sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            borderBottom: index < uploadedDocuments.length - 1 ? '1px solid #eee' : 'none',
                            transition: 'background-color 0.2s',
                            '&:hover': { backgroundColor: 'rgba(0,0,0,0.02)' }
                          }}
                        >
                          <Box 
                            sx={{ 
                              bgcolor: 'primary.light', 
                              color: 'white',
                              p: 1,
                              borderRadius: '50%',
                              mr: 2,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <doc.icon sx={{ fontSize: 24 }} />
                          </Box>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="body1" fontWeight="medium">
                              {doc.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Typography variant="caption" color="textSecondary">
                                {doc.type} • Uploaded {doc.date}
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                                <CheckCircleIcon sx={{ color: 'success.main', fontSize: 16, mr: 0.5 }} />
                                <Typography variant="caption" color="success.main">
                                  {doc.status}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      ))}
                    </CardContent>
                  </AnimatedCard>
                </Grid>
              </Grid>
            </Grid>

            {/* Credit Score Assistant */}
            <Grid item xs={12}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium', color: 'primary.main', mb: 1 }}>
                  HoliStat Credit Score Assistant
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ mb: 2, maxWidth: 800 }}>
                  Have questions about your score? Our AI assistant can help explain your score and offer personalized advice.
                </Typography>
              </Box>
              <AnimatedCard sx={{ 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': { boxShadow: '0 8px 16px rgba(0,0,0,0.1)' },
              }}>
                <CardContent>
                  <Box sx={{ 
                    maxHeight: '300px', 
                    overflow: 'auto', 
                    mb: 2, 
                    bgcolor: 'rgba(0,0,0,0.02)', 
                    p: 3, 
                    borderRadius: 2,
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}
                    ref={chatRef}>
                    {chatHistory.map((message, index) => (
                      <Box 
                        key={index} 
                        sx={{ 
                          mb: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: message.isUser ? 'flex-end' : 'flex-start'
                        }}
                      >
                        <Box sx={{ 
                          display: 'inline-block',
                          p: 2,
                          borderRadius: 2,
                          bgcolor: message.isUser ? 'primary.main' : 'white',
                          color: message.isUser ? 'white' : 'inherit',
                          maxWidth: '75%',
                          boxShadow: message.isUser 
                            ? 'none' 
                            : '0 1px 2px rgba(0,0,0,0.1)',
                          border: message.isUser 
                            ? 'none' 
                            : '1px solid rgba(0,0,0,0.1)',
                        }}>
                          <Typography variant="body1">
                            {message.text}
                          </Typography>
                        </Box>
                        <Typography variant="caption" color="textSecondary" sx={{ mt: 0.5 }}>
                          {message.isUser ? 'You' : 'Assistant'} • {new Date().toLocaleTimeString()}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  {chatHistory.length === 0 && (
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      p: 3, 
                      textAlign: 'center',
                      color: 'text.secondary'
                    }}>
                      <PsychologyIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2, opacity: 0.7 }} />
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        Have questions about your HoliStat Credit Score?
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Ask me about score factors, how to improve your score, or what makes the HoliStat Credit Score different from traditional scores.
                      </Typography>
                    </Box>
                  )}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Ask a question about your HoliStat Credit Score..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSendMessage();
                      }}
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '30px',
                          pr: 0
                        }
                      }}
                    />
                    <IconButton 
                      color="primary" 
                      onClick={handleSendMessage}
                      sx={{ 
                        ml: -6, 
                        bgcolor: 'primary.main', 
                        color: 'white',
                        '&:hover': { bgcolor: 'primary.dark' }
                      }}
                    >
                      <SendIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </AnimatedCard>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CreditScorePage;
