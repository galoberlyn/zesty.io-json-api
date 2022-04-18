import React from 'react';
import { Box, Container } from '@mui/material';
import ApplicationNav from './ApplicationNav';

export type LayoutTypes = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutTypes) {
  const { children } = props;

  return (
    <Box sx={{ background: '#FAF8F2' }}>
      <ApplicationNav />
      <Box component="main">
        <Container style={{ marginTop: 20 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}
