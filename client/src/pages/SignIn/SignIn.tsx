import React, { useEffect, useState } from 'react';
import API from '../../apis';
import { AuthForm } from '../../components/AuthForm';
import { Header } from '../../components/Header';
import * as S from './SignInStyle';

const SignIn = () => {
  // API 테스트용
  const [data, setData] = useState();
  useEffect(() => {
    const signUpUser = async () => {
      const res = await API.User.signUp({ userId: 'id2', password: 'pass2' });
      setData(res);
    };
    signUpUser();
    console.log(data);
  });
  return (
    <S.Container>
      <Header />
      <AuthForm type="signIn" />
    </S.Container>
  );
};

export default SignIn;
