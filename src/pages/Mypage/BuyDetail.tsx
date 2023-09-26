import React from 'react';
import styled from 'styled-components';
import DeliveryInfo from './DeliveryInfo';

const BuyDetail = () => {
  return (
    <Section>
      <DeliveryInfo />
    </Section>
  );
};

export default BuyDetail;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
`;
