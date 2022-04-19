import { LoadingComponent } from 'app/components/LoadingComponent';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Contents } from './components/Contents';
import { useHomepage } from './useHomepage';
import ContentLayout from 'app/components/ContentLayout';

export function HomePage() {
  const { fetchContents, loading, contents, error } = useHomepage();

  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <ContentLayout
      head={
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Feed" />
        </Helmet>
      }
      loadingComponent={<LoadingComponent />}
      contents={<Contents contents={contents} />}
      isLoading={loading}
      error={error}
    />
  );
}
