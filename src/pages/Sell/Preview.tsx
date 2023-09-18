import React from 'react';
import { styled } from 'styled-components';

interface PreviewProps {
  imageSrc: string[] | null;
}

const Preview = (props: PreviewProps) => {
  const { imageSrc } = props;
  return (
    <Container>
      {imageSrc &&
        imageSrc.map((src, index) => (
          <Thumbnail key={index}>
            <img width="100%" src={src} />
          </Thumbnail>
        ))}
    </Container>
  );
};

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
  & + & {
    margin-left: 24px;
  }
`;

const Container = styled.div`
  display: flex;
  margin-left: 16px;
  margin-top: 40px !important;
`;

export default Preview;
