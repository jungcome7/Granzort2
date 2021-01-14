import React from 'react';
import { Header } from '../../components/Header';
import { SignUpForm } from '../../components/SignUpForm';
import * as S from './SignUpStyle';

const SignUp = () => {
  return (
    <S.Container>
      <Header />
      <SignUpForm />
    </S.Container>
  );
};

export default SignUp;
