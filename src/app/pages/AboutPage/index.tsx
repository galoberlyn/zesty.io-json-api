/**
 *
 * AboutPage
 *
 */
import * as React from 'react';
import ContentLayout from 'app/components/ContentLayout';
import { LoadingComponent } from 'app/components/LoadingComponent';
import { Helmet } from 'react-helmet-async';
import { useAboutPage } from './useAboutpage';
import { Contents } from './components/Contents';

export function AboutPage() {
  const { loading, fetchContents, contents, error } = useAboutPage();

  React.useEffect(() => {
    fetchContents();
  }, []);

  return (
    <ContentLayout
      head={
        <Helmet>
          <title>About</title>
          <meta name="description" content="About" />
        </Helmet>
      }
      loadingComponent={<LoadingComponent />}
      contents={<Contents contents={contents} />}
      isLoading={loading}
      error={error}
    />
  );
}
