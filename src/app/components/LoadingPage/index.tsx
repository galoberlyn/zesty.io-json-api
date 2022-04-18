import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

export const LoadingPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Typography variant="h1" sx={{ margin: 'auto ' }}>
        <CircularProgress />
      </Typography>
    </Container>
  );
};
