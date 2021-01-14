import React from 'react';
import { Header } from '../../components/Header';
import { SignInForm } from '../../components/SignInForm';
import * as S from './SignInStyle';

const SignIn = () => {
  return (
    <S.Container>
      <Header />
      <SignInForm />
    </S.Container>
  );
};

export default SignIn;
