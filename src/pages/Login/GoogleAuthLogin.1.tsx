import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const GoogleAuthLogin = () => {
  const clientId =
    '509320414110-n3vuvelvfthqjkmt2s842mf95ieohf62.apps.googleusercontent.com';

  return (
    <React.Fragment>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res, '로그인 성공');
          }}
          onError={() => {
            console.log('로그인 실패');
          }}
          width={'360px'}
        />
      </GoogleOAuthProvider>
    </React.Fragment>
  );
};
