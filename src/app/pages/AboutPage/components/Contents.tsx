import React from 'react';

type ContentTypes = {
  contents: string;
};

export const Contents = (props: ContentTypes) => {
  const { contents } = props;

  return (
    <div style={{ height: '100vh' }}>
      {!contents ? (
        <h2>No content found</h2>
      ) : (
        <p dangerouslySetInnerHTML={{ __html: contents }} />
      )}
    </div>
  );
};
