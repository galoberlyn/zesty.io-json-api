import React from 'react';
import { Grid, Alert } from '@mui/material';

type ContentLayoutTypes = {
  head: React.ReactNode;
  loadingComponent: React.ReactNode;
  contents: React.ReactNode;
  isLoading: boolean;
  error: string;
};

const ContentLayout: React.FC<ContentLayoutTypes> = ({
  head,
  loadingComponent,
  contents,
  isLoading,
  error,
}) => {
  return (
    <div>
      {head}
      <Grid container>
        {error && (
          <Grid item xs={12}>
            <Alert severity="error">
              Something went wrong while fetching the data
            </Alert>
          </Grid>
        )}
        {isLoading && (
          <Grid item xs={12}>
            {loadingComponent}
          </Grid>
        )}
        <Grid item xs={12}>
          {contents}
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentLayout;
