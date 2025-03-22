import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Button,
  TextField,
  Paper,
  Stack,
  Grid,
} from '@mui/material';

export const CreditPage = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ type: 'user' | 'ai'; content: string }>>([]);
  const creditScore = 750; // Credit score

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { type: 'user', content: message }]);

    // Simulate AI response
    setTimeout(() => {
      let response = "I understand you're interested in your credit score. ";
      if (message.toLowerCase().includes('improve')) {
        response += "To improve your credit score, consider: 1) Making payments on time 2) Keeping credit utilization low 3) Maintaining older credit accounts 4) Limiting new credit applications.";
      } else if (message.toLowerCase().includes('good')) {
        response += "A score of 750 is considered very good! It's well above the national average and should qualify you for favorable rates.";
      } else {
        response += "I'm here to help you understand your credit score and provide personalized advice. Feel free to ask specific questions!";
      }
      setChatHistory(prev => [...prev, { type: 'ai', content: response }]);
    }, 1000);

    setMessage('');
  };

  const getScoreColor = (score: number) => {
    if (score >= 700) return '#4caf50';
    if (score >= 600) return '#ff9800';
    return '#f44336';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 750) return 'Excellent';
    if (score >= 700) return 'Very Good';
    if (score >= 650) return 'Good';
    if (score >= 600) return 'Fair';
    return 'Poor';
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Credit Score Overview
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" gutterBottom>
                Your FICO Score
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-flex',
                  my: 3,
                }}
              >
                <CircularProgress
                  variant="determinate"
                  value={(creditScore / 850) * 100}
                  size={200}
                  thickness={4}
                  sx={{
                    color: getScoreColor(creditScore),
                  }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                    {creditScore}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {getScoreLabel(creditScore)}
                  </Typography>
                </Box>
              </Box>
              <Typography color="textSecondary" sx={{ mt: 2 }}>
                Last updated: March 20, 2025
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Credit Assistant
              </Typography>
              <Paper
                sx={{
                  height: 400,
                  overflow: 'auto',
                  p: 2,
                  mb: 2,
                  backgroundColor: '#f8f9fa',
                }}
              >
                <Stack spacing={2}>
                  {chatHistory.map((msg, index) => (
                    <Box
                      key={index}
                      sx={{
                        alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                        maxWidth: '80%',
                      }}
                    >
                      <Paper
                        elevation={1}
                        sx={{
                          p: 2,
                          backgroundColor: msg.type === 'user' ? 'primary.main' : '#fff',
                          color: msg.type === 'user' ? 'white' : 'text.primary',
                        }}
                      >
                        <Typography>{msg.content}</Typography>
                      </Paper>
                    </Box>
                  ))}
                </Stack>
              </Paper>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about your credit score..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  size="small"
                />
                <Button variant="contained" onClick={handleSendMessage}>
                  Send
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
