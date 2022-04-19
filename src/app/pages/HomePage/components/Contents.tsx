import React from 'react';
import { Contents as ContentModel } from '../slice/types';

type ContentTypes = {
  contents: ContentModel[];
};

export const Contents = (props: ContentTypes) => {
  const { contents } = props;

  return (
    <>
      {contents.map(content => (
        <div key={content.title}>
          <h2>{content.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: content.text_content }} />
        </div>
      ))}
      {!contents.length && <h2>No content found</h2>}
    </>
  );
};
