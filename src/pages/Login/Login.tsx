import React from 'react';
import styled from 'styled-components';
import { GoogleAuthLogin } from './GoogleAuthLogin.1';
import logo from './assets/auc_logo.svg';

const Login = () => {
  return (
    <LoginSection>
      <img src={logo} alt="logo_img" />
      <GoogleAuthLogin />
    </LoginSection>
  );
};

export default Login;

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  img {
    width: 120px;
    margin-bottom: 48px;
  }
`;
