import React from 'react';
import { Link } from 'react-router-dom';
import useEmailFormik from '../../hooks/useEmailFormik';
import * as S from './SignUpFormStyle';

const SignInForm = () => {
  const { initialValues, onSubmit, validationSchema } = useEmailFormik();

  return (
    <>
      <S.Container>
        <S.Box>
          <S.Logo>GRANZORT</S.Logo>
          <S.SignUpArea>
            <S.Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              // validateOnMount
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
                    <S.SignUpButton
                      type="submit"
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      Sign Up
                    </S.SignUpButton>
                  </S.Form>
                );
              }}
            </S.Formik>
            <S.SignUpFacebookButton>
              Sign up with Facebook
            </S.SignUpFacebookButton>
            <S.SignUpGoogleButton>Sign up with Google</S.SignUpGoogleButton>
          </S.SignUpArea>
          <Link to="/signIn">
            <S.MoveToSignInButton>Move to Sign In</S.MoveToSignInButton>
          </Link>
        </S.Box>
      </S.Container>
    </>
  );
};

export default SignInForm;
