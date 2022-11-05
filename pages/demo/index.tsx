import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DemoPulseGraph from '../../src/client/components/DemoPulseGraph';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Listen to your <span color="red">pulse</span>
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          Demo
        </Typography>
        <DemoPulseGraph wrapperClass="demo" />
      </Box>
    </Container>
  );
}
