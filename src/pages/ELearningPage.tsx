import { Box, Typography, Grid, CardContent, Chip } from '@mui/material';
import { AnimatedCard } from '../components/AnimatedCard';
import { HomeButton } from '../components/HomeButton';
import SchoolIcon from '@mui/icons-material/School';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const videos = [
  {
    title: 'Building Credit Confidence',
    description: 'Understand how to build and maintain a strong credit score.',
    videoId: 'xLKDEcDxrfo',
    category: 'Credit',
  },
  {
    title: 'Budgeting Made Simple',
    description: 'Learn easy steps to create and stick to a budget.',
    videoId: '0GsSTBI8Zkk',
    category: 'Budgeting',
  },
  {
    title: 'Retirement Planning 101',
    description: 'Discover key strategies for a secure retirement.',
    videoId: 'hrvN7hza4T0',
    category: 'Investing',
  },
  {
    title: 'First-Time Homebuyer Guide',
    description: 'Step-by-step tips for purchasing your first home.',
    videoId: 'x3s7KvPtARw',
    category: 'Mortgages',
  },
  {
    title: 'How Interest Rates Impact You',
    description: 'An overview of how interest rates affect your financial choices.',
    videoId: '23MZ_NlluTc',
    category: 'Banking',
  },
  {
    title: 'Using Credit Cards Wisely',
    description: 'Best practices for managing credit card debt.',
    videoId: 'tzxPRBvJTuY',
    category: 'Credit',
  },
];

const categoryColors = {
  Credit: '#2196f3',
  Budgeting: '#4caf50',
  Investing: '#ff9800',
  Mortgages: '#9c27b0',
  Banking: '#009688',
};

const ELearningPage = () => {
  const totalVideos = videos.length;
  const categories = [...new Set(videos.map(video => video.category))];
  const creditVideos = videos.filter(video => video.category === 'Credit').length;

  return (
    <Box sx={{ p: 3, maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
      <HomeButton />
      
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Financial Education Center
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PlayCircleIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Total Lessons</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                {totalVideos}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Educational videos
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SchoolIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Topics</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                {categories.length}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Different categories
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AnimatedCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SchoolIcon sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography variant="h6">Credit Education</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                {creditVideos}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Credit-focused lessons
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {videos.map((video) => (
          <Grid item xs={12} md={6} key={video.title}>
            <AnimatedCard>
              <CardContent>
                <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, mb: 2 }}>
                  <Box
                    component="iframe"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                      borderRadius: 1,
                    }}
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {video.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {video.description}
                </Typography>
                <Chip
                  label={video.category}
                  sx={{
                    bgcolor: `${categoryColors[video.category as keyof typeof categoryColors]}15`,
                    color: categoryColors[video.category as keyof typeof categoryColors],
                    borderColor: categoryColors[video.category as keyof typeof categoryColors],
                  }}
                  variant="outlined"
                />
              </CardContent>
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ELearningPage;
