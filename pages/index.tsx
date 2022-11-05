import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {RaitingTable} from '../src/client/components/RaitingTable';
import Graph from '../src/client/components/Graph';
import Button from '@mui/material/Button';
import styled from '@emotion/styled'

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

const StyledButton = styled(Button)`
  margin-right: 20px;
`;

const RedSircle = styled.div`
height: 15px;
width: 15px;
background-color: red;
border-radius: 50%;
display: inline-block;
margin-right: 10px;
`;

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
        <div>
      {([
        {name: 'Live' },
        {name: 'History' },
        {name: 'Top-Chart'}
      ] as const).map((anchor) => (
        <>
          <StyledButton variant="contained" onClick={() => {}}>
            {anchor.name === 'Live' && (
              <RedSircle />
            )}
            {anchor.name}
          </StyledButton>
        </>
      ))}
    </div>
        <Graph wrapperClass="firstSit" />
        <RaitingTable domains={domains}/>
      </Box>
    </Container>
  );
}
