/**
 *
 * LoadingComponent
 *
 */

import React from 'react';
import { Box, LinearProgress } from '@mui/material';

export function LoadingComponent() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}
