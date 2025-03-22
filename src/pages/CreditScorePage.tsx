import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
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
import styled from '@emotion/styled';
import { AnimatedCard } from '../components/AnimatedCard';
import { HomeButton } from '../components/HomeButton';

const ChatContainer = styled(Paper)`
  height: 300px;
  overflow-y: auto;
  padding: 16px;
  background: #f8f9fa;
  margin-top: 16px;
`;

const MessageBubble = styled(Box)<{ isUser?: boolean }>`
  background: ${props => props.isUser ? '#1976d2' : '#ffffff'};
  color: ${props => props.isUser ? '#ffffff' : '#000000'};
  padding: 8px 16px;
  border-radius: 20px;
  margin: 8px 0;
  max-width: 80%;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

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
  const [creditScore] = useState(745);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newMessage = { text: message, isUser: true };
    setChatHistory(prev => [...prev, newMessage]);
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, creditScore }),
      });

      const data = await response.json();
      setChatHistory(prev => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
      setChatHistory(prev => [...prev, { text: 'Sorry, I encountered an error. Please try again.', isUser: false }]);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Here you would typically upload the file to your server
      // For now, we'll just show a success message
      setChatHistory(prev => [...prev, { 
        text: `Successfully uploaded: ${file.name}. Our team will review your document and update your Holistat Score accordingly.`, 
        isUser: false 
      }]);
    }
  };

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

  return (
    <Box sx={{ p: 3, maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
      <HomeButton />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">
          Holistat Score & Insights
        </Typography>
      </Box>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <AnimatedCard>
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
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUpIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
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
          <AnimatedCard>
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
          <AnimatedCard>
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

        {/* Document Upload Section */}
        <Grid item xs={12}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <UploadFileIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">
                  Upload Supporting Documents
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                Upload letters of recommendation or other supporting documents to potentially improve your Holistat Score.
                Our team will review your documents within 2-3 business days.
              </Typography>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.txt"
              />
              <Button
                variant="contained"
                startIcon={<UploadFileIcon />}
                onClick={() => fileInputRef.current?.click()}
                sx={{ mb: 2 }}
              >
                Upload Document
              </Button>
              {selectedFile && (
                <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                  {selectedFile.name} uploaded successfully
                </Typography>
              )}
            </CardContent>
          </AnimatedCard>
        </Grid>

        {/* Credit Score Assistant */}
        <Grid item xs={12}>
          <AnimatedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Holistat Score Assistant
              </Typography>
              <ChatContainer ref={chatRef}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {chatHistory.map((msg, index) => (
                    <MessageBubble key={index} isUser={msg.isUser}>
                      {msg.text}
                    </MessageBubble>
                  ))}
                </Box>
              </ChatContainer>
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Ask about your Holistat Score..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <IconButton
                  color="primary"
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                >
                  <SendIcon />
                </IconButton>
              </Box>
            </CardContent>
          </AnimatedCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreditScorePage;
