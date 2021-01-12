import React from 'react';
import { Header } from '../../components/Header';
import * as S from './SignInStyle';
import * as Yup from 'yup';

type FormValues = {
  email?: string;
};

const initialValues: FormValues = {
  email: '',
};

const onSubmit = (values: FormValues) => console.log(values);

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format22').required('Required'),
});

const SignIn = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Box>
          <S.Logo>GRANZORT</S.Logo>
          <S.Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnMount={true}
            onSubmit={onSubmit}
          >
            {(formik) => {
              console.log(formik);
              return (
                <S.Form>
                  <S.Field
                    type="text"
                    placeholder="이메일을 입력하세요.."
                    name="email"
                  />
                  <S.ErrorMessage name="email" component="div" />
                  <S.SignInButton type="submit" disabled={!formik.isValid}>
                    Sign In
                  </S.SignInButton>
                </S.Form>
              );
            }}
            {/* <S.Form>
              <S.Field
                type="text"
                placeholder="이메일을 입력하세요.."
                name="email"
              />
              <S.ErrorMessage name="email" component="div" />
              <S.SignInButton type="submit">Sign In</S.SignInButton>
            </S.Form> */}
          </S.Formik>
          <S.SignInFacebookButton>Sign in with Facebook</S.SignInFacebookButton>
          <S.SignInGoogleButton>Sign in with Google</S.SignInGoogleButton>
        </S.Box>
      </S.Container>
    </>
  );
};

export default SignIn;
