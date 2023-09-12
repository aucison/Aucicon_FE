import React from 'react';
import { styled } from 'styled-components';

interface PreviewProps {
  imageSrc: string[] | null;
}

const Preview = (props: PreviewProps) => {
  const { imageSrc } = props;
  return (
    imageSrc &&
    imageSrc.map((src, index) => (
      <Thumbnail key={index}>
        <img width="100%" src={src} />
      </Thumbnail>
    ))
  );
};

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
`;

export default Preview;
