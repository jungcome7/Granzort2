import React from 'react';
import { useFormik } from 'formik';
import { Header } from '../../components/Header';
import * as S from './SignInStyle';

type Errors = {
  email?: string;
};

type FormValues = {
  email?: string;
};

const initialValues: FormValues = {
  email: '',
};

const onSubmit = (values: FormValues) => console.log(values);

const validate = (values: FormValues) => {
  const errors: Errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format';
  }
  return errors;
};

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // console.log(formik.values);

  return (
    <>
      <Header />
      <S.Container>
        <S.Box>
          <S.Logo>GRANZORT</S.Logo>
          <S.Form onSubmit={formik.handleSubmit}>
            <S.Input
              type="text"
              placeholder="이메일을 입력하세요.."
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <S.SignInButton type="submit">Sign In</S.SignInButton>
          </S.Form>
          <S.SignInFacebookButton>Sign in with Facebook</S.SignInFacebookButton>
          <S.SignInGoogleButton>Sign in with Google</S.SignInGoogleButton>
        </S.Box>
      </S.Container>
    </>
  );
};

export default SignIn;
