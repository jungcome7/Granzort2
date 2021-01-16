import React, { useEffect, useState } from 'react';
import API from '../../apis';
import { AuthForm } from '../../components/AuthForm';
import { Header } from '../../components/Header';
import * as S from './SignInStyle';

const SignIn = () => {
  return (
    <S.Container>
      <Header />
      <AuthForm type="signIn" />
    </S.Container>
  );
};

export default SignIn;
