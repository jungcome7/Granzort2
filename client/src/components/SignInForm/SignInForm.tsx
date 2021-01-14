import React from 'react';
import { Link } from 'react-router-dom';
import useEmailFormik from '../../hooks/useEmailFormik';
import * as S from './SignInFormStyle';

const SignInForm = () => {
  const { initialValues, onSubmit, validationSchema } = useEmailFormik();

  return (
    <>
      <S.Container>
        <S.Box>
          <S.Logo>GRANZORT</S.Logo>
          <S.SignInArea>
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
                    <S.SignInButton
                      type="submit"
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      Sign In
                    </S.SignInButton>
                  </S.Form>
                );
              }}
            </S.Formik>
            <S.SignInFacebookButton>
              Sign in with Facebook
            </S.SignInFacebookButton>
            <S.SignInGoogleButton>Sign in with Google</S.SignInGoogleButton>
          </S.SignInArea>
          <Link to="/signUp">
            <S.MoveToSignUpButton>Sign Up</S.MoveToSignUpButton>
          </Link>
        </S.Box>
      </S.Container>
    </>
  );
};

export default SignInForm;
