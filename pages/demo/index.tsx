import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DemoPulseGraph from '../../src/client/components/DemoPulseGraph';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
          Listen to your <span color="red">pulse</span>. Demo
        </Typography>
        <ImageList sx={{ width: 700, height: 200 }} cols={3} rowHeight={164}>
          <ImageListItem key={1}>
          <Image src="/1.png" alt="me"  width='250' height="180" />
          </ImageListItem>
          <ImageListItem key={2}>
          <Image src="/2.png" alt="me"  width='250' height="180" />
          </ImageListItem>
          <ImageListItem key={3}>
          <Image src="/3.png" alt="me" width='250' height="180" />
          </ImageListItem>
        </ImageList>
        <DemoPulseGraph wrapperClass="demo" />
      </Box>
    </Container>
  );
}
