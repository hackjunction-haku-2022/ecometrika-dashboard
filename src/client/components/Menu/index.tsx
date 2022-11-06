import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from '@emotion/styled'

function createData(
  name: string,
  id: number,
  raiting: number
) {
  return { name, id, raiting};
}

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

export default function Menu({active}: {active: string}) {
  return (

        <div>
      {([
        {id: '1', name: 'Last session', onClick: () => {
          window.location.href = "/"
        } },
        {id: '2', name: 'How it works', onClick: () => {
          window.location.href = "/how-it-works"
        } },
        {id: '3', name: 'Demo', onClick: () => {
          window.location.href = "/demo"
        } }
      ] as const).map((anchor) => (
        <>
          <StyledButton
          color={active === anchor.id ? 'secondary' : 'primary'}
          
          disabled={active === anchor.id}
          variant="contained" onClick={anchor.onClick}>
            {anchor.name === 'Demo' && (
              <RedSircle />
            )}
            {anchor.name}
          </StyledButton>
        </>
      ))}
    </div>
  );
}
