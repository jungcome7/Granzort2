import React from 'react';
import { Header } from '../../components/Header';
import * as S from './SignInStyle';

const SignIn = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Box>
          <S.Logo>GRANZORT</S.Logo>
          <S.SignInButton>Sign In</S.SignInButton>
          <S.SignInFacebookButton>Sign in with Facebook</S.SignInFacebookButton>
          <S.SignInGoogleButton>Sign in with Google</S.SignInGoogleButton>
        </S.Box>
      </S.Container>
    </>
  );
};

export default SignIn;
