import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {RaitingTable} from '../src/client/components/RaitingTable';

function createData(
  name: string,
  id: number,
  raiting: number
) {
  return { name, id, raiting};
}

const domains = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];

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
          TOP ECO SITES IN THE WEB
        </Typography>
        <RaitingTable domains={domains}/>
      </Box>
    </Container>
  );
}
