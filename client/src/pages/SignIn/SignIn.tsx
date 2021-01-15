import React from 'react';
import API from '../../apis';
import { AuthForm } from '../../components/AuthForm';
import { Header } from '../../components/Header';
import * as S from './SignInStyle';

const SignIn = () => {
  console.log(API.User.signUp({ userId: 'id2', password: 'pass2' }));
  return (
    <S.Container>
      <Header />
      <AuthForm type="signIn" />
    </S.Container>
  );
};

export default SignIn;
