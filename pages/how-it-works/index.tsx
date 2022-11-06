import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DemoPulseGraph from '../../src/client/components/DemoPulseGraph';
import Image from 'next/image';
import Menu from "../../src/client/components/Menu";
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
          Listen to your <span color="red">pulse</span>. How it works?
        </Typography>
        <Menu active="2" />
        <ImageList sx={{ width: 980 }} cols={1} rowHeight={560}>
          <ImageListItem key={1}>
            <Image src="/1s.jpg" alt="me"  width='960' height="540" />
          </ImageListItem>
          <ImageListItem key={2}>
          <Image src="/2s.jpg" alt="me"  width='960' height="540" />
          </ImageListItem>
          <ImageListItem key={3}>
          <Image src="/3s.jpg" alt="me" width='960' height="540" />
          </ImageListItem>
          <ImageListItem key={3}>
          <Image src="/4s.jpg" alt="me" width='960' height="540" />
          </ImageListItem>
        </ImageList>
      </Box>
    </Container>
  );
}
